import { PageTransition } from '@/features/page-transition/page-transition';
import { Container } from '@/shared/ui/layouts/container';

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageTransition>
      <Container>{children}</Container>
    </PageTransition>
  );
}
