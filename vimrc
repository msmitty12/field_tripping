set mouse=a

set number
set relativenumber

call plug#begin('~/.vim/plugged')

Plug 'w0rp/ale'

Plug 'ap/vim-buftabline'

Plug 'SirVer/ultisnips'

Plug 'honza/vim-snippets'

Plug 'scrooloose/nerdtree'

call plug#end()

map <silent> <C-n> :NERDTreeToggle<CR>
