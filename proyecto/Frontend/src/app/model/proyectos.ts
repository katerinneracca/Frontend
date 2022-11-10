export class Proyectos {
    id?: number;
    nombreP: string;
    descripcionP: string;
    linkP: string;
    linkGithub: string;

    constructor(nombreP: string, descripcionP: string, linkP: string, linkGithub: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.linkP = linkP;
        this.linkGithub = linkGithub;
    }
}
