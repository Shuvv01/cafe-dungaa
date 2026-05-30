import AuthForm from '@/components/AuthForm';

export const metadata = {
  title: 'Sign In | Cafe Dungaa'
};

export default function SignInPage() {
  return (
    <div className="bg-cream pt-20">
      <section className="section-y">
        <div className="container-pad">
          <AuthForm mode="login" />
        </div>
      </section>
    </div>
  );
}
