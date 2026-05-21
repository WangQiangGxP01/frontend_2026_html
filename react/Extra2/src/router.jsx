import {
  createBrowserRouter,
  redirect
} from "react-router-dom";
import { getLesson, getProduct, lessons, products } from "./data.js";
import { getUser, login } from "./utils/auth.js";
import { Layout } from "./pages/Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { Lessons } from "./pages/Lessons.jsx";
import { LessonDetail } from "./pages/LessonDetail.jsx";
import { Products } from "./pages/Products.jsx";
import { ProductDetail } from "./pages/ProductDetail.jsx";
import { Dashboard, DashboardHome, DashboardNotes } from "./pages/Dashboard.jsx";
import { Login } from "./pages/Login.jsx";
import { NotFound } from "./pages/NotFound.jsx";

function requireAuth({ request }) {
  const user = getUser();
  if (!user) {
    const url = new URL(request.url);
    throw redirect(`/login?message=${encodeURIComponent("ログインしてから開いてください")}&redirectTo=${url.pathname}`);
  }
  return user;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "lessons",
        element: <Lessons />,
        loader: () => lessons
      },
      {
        path: "lessons/:lessonId",
        element: <LessonDetail />,
        loader: ({ params }) => {
          const lesson = getLesson(params.lessonId);
          if (!lesson) {
            throw new Response("Lesson not found", { status: 404 });
          }
          return lesson;
        }
      },
      {
        path: "products",
        element: <Products />,
        loader: () => products
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
        loader: ({ params }) => {
          const product = getProduct(params.productId);
          if (!product) {
            throw new Response("Product not found", { status: 404 });
          }
          return product;
        }
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: requireAuth,
        children: [
          {
            index: true,
            element: <DashboardHome />
          },
          {
            path: "notes",
            element: <DashboardNotes />
          }
        ]
      },
      {
        path: "login",
        element: <Login />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const username = String(formData.get("username") || "").trim();
          const redirectTo = String(formData.get("redirectTo") || "/dashboard");

          if (username.length < 2) {
            return { error: "名前は 2 文字以上で入力してください。" };
          }

          await login(username);
          return redirect(redirectTo);
        }
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);
