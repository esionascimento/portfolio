export const PATH_PAGE = {
  home: '/#home',
  about: '/#sobre-mim',
  projetos: '/#projetos',
};

export const navConfig: {
  subheader: string;
  items: {
    title: string;
    path: string;
    id: string;
    icon?: string;
  }[];
}[] = [
  {
    subheader: 'geral',
    items: [
      { id: 'home', title: 'Home', path: PATH_PAGE.home },
      { id: 'about', title: 'Sobre mim', path: PATH_PAGE.about },
      { id: 'projetos', title: 'Projetos', path: PATH_PAGE.projetos },
    ],
  },
];
