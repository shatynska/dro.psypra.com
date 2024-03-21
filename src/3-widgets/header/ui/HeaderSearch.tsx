import { Search } from 'lucide-react';

import { Button } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';

export function HeaderSearch() {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      <Input placeholder="прізвище, тема, ..." />
      <Button size={'icon'} variant={'secondary'}>
        <Search />
      </Button>
    </div>
  );
}
