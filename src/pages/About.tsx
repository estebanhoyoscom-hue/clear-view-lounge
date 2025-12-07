import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/seo/SEO';
import { HowItWorksContent } from '@/components/about/HowItWorksContent';

export default function About() {
  return (
    <Layout fullPage>
      <SEO
        title="¿Cómo funciona? - Behuman"
        description="Behuman es una plataforma B2B que permite a las empresas crear agentes IA personalizados para monitorear y mejorar el bienestar emocional de sus empleados."
        type="website"
      />
      <HowItWorksContent />
    </Layout>
  );
}
