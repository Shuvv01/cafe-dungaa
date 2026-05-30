import AuthForm from '@/components/AuthForm';

export const metadata = {
  title: 'Register | Cafe Dungaa'
};

export default function RegisterPage() {
  return (
    <div className="bg-cream pt-20">
      <section className="section-y">
        <div className="container-pad">
          <AuthForm mode="register" />
        </div>
      </section>
    </div>
  );
}
