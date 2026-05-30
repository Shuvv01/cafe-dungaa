import InstagramFeed from '@/components/InstagramFeed';
import SectionHeader from '@/components/SectionHeader';
import SocialLinks from '@/components/SocialLinks';

export const metadata = {
  title: 'Gallery | Cafe Dungaa'
};

export default function GalleryPage() {
  return (
    <div className="bg-cream pt-20">
      <section className="section-y">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Gallery"
            title="Moments from Cafe Dungaa"
            description="Warm visuals, social links and atmosphere previews help people feel confident before they visit."
          />
          <div className="mt-8 flex justify-center">
            <SocialLinks />
          </div>
          <div className="mt-12">
            <InstagramFeed />
          </div>
        </div>
      </section>
    </div>
  );
}
