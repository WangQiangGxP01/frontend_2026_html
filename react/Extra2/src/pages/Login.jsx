import {
  Form,
  useActionData,
  useNavigation,
  useSearchParams
} from "react-router-dom";

export function Login() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const message = searchParams.get("message");
  const redirectTo = searchParams.get("redirectTo") || "/dashboard";
  const isSubmitting = navigation.state === "submitting";

  return (
    <section className="login-page">
      <div className="login-panel">
        <p className="eyebrow">Form / action / redirect</p>
        <h2>ログイン練習</h2>
        {message && <p className="notice">{message}</p>}
        <Form method="post" replace>
          <input type="hidden" name="redirectTo" value={redirectTo} />
          <label htmlFor="username">名前</label>
          <input id="username" name="username" placeholder="例: Tanaka" />
          {actionData?.error && <p className="error-text">{actionData.error}</p>}
          <button className="primary-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "ログイン中..." : "ログインする"}
          </button>
        </Form>
      </div>
    </section>
  );
}
