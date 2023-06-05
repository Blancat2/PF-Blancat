export interface NavItem {
  path: string;
  title: string;
  icon?: string;
  allowedRoles: string[];
}

const links: NavItem[] = [
  {
    path: 'estudiantes',
    title: 'Estudiantes',
    icon: 'person',
    allowedRoles: [],

  },
  {
    path: 'cursos',
    title: 'Cursos',
    icon: 'school',
    allowedRoles: ['admin'],
  },

  {
    path: 'inscripciones',
    title: 'Inscripciones',
    icon: 'book',
    allowedRoles: [],
  }

  
]

export default links;
