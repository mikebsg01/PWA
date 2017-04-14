import { Injectable } from '@angular/core';

@Injectable()
export class LogrosService {

  constructor() { }

  all() : ILogro[] {
    return [{
      id: 1,
      title: "Lorem ipsum Ad dolore",
      description: "reprehenderit Duis anim voluptate do occaec Lorem ipsum Incididunt reprehenderit Duis anim voluptate do occaecat commodo ad amet culpa ut anim in laborum occaecat incididunt dolore labore veniam in."
    },
    {
      id: 2,
      title: "Lorem ipsum Id."
    },
    {
      id: 3,
      title: "Lorem ipsum Cupidatat.",
      description: "Cupidatat Lorem ipsum Cupidatat magna anim dolor adipisicing labore est dolore eu et."
    }]
  }
}

export interface ILogro {
  id: number;
  title: string;
  description ?: string;
}