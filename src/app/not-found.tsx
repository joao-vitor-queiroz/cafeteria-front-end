import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
        404 - Página não encontrada
      </h2>
      <p className="mt-2 text-stone-600 dark:text-stone-400">
        Parece que a página ou o café que você estava procurando não está no nosso cardápio.
      </p>
      <div className="mt-6">
        <Link href="/">
          <Button variant="primary">Voltar ao Cardápio</Button>
        </Link>
      </div>
    </div>
  );
}
