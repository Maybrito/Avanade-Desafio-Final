const  express  =  require ( 'express' ) ;
const  bodyParser  =  require ( 'body-parser' ) ;
const  app  =  express ( ) ;
aplicativo . use ( bodyParser.json ( ) ) ; _ _

var  funcionarios  =  [ ] ;

function  getProfessor ( req ,  res )  {
    res . enviar ( funcionários ) ;
}

função  cadastroProfessores ( req ,  res )  {
    const  professor  =  req . corpo ;
    const  professorPesquisado  =  funcionarios . find ( ( professorNaLista )  =  > professorNaLista.nome == professor.nome ) ; _ _  _ 
    if  ( ! professorPesquisado )  {
        funcionais . empurrar ( professor ) ;
        res . enviar ( 'Inserido com Sucesso' ) ;
    }  senão  {
        res . send ( `não é possível inserir pois já existe um Professor com nome $ { professor .name } ` ) ;
    }
}

function  getProfessorById ( req ,  res )  {
    const  nomeProfessor  =  req . parâmetros . identificação ;
    const  professorPesquisado  =  funcionarios . find ( ( professorNaLista )  =>  professorNaLista . nome  ==  nomeProfessor ) ;
    if ( ! professorPesquisado ) {
        res . send ( `não existe um professor com este nome ${ nomeProfessor } ` )
    }  senão  {
        res . enviar ( professorPesquisado ) ;
    }
}

function  deleteProfessor ( req ,  res )  {
    const  nomeProfessor  =  req . parâmetros . identificação ;
    funcionarios  =  funcionarios . filter ( ( professor )  = >  professor.name ! = nomeProfessor  ) ; 
    res . send ( `O produto com o nome ${ nomeProfessor } foi removido com sucesso!` ) ;
}

function  updateProfessor ( req ,  res )  {
    const  nomeProfessor  =  req . parâmetros . identificação ;
    const  professor  =  req . corpo ;
    const  professorPesquisado  =  funcionarios . find ( ( professorNaLista )  =>  professorNaLista . nome  ==  nomeProfessor ) ;
    if ( ! professorPesquisado ) {
        res . send ( `não existe o professor com o nome ${ nomeProfessor } cadastrado` )
    }  senão  {
        professorPesquisado . nome  =  professor . nome ;
        professorPesquisado . curso  =  professor . curso ;


        
        res . send ( `Professor com o nome ${ nomeProfessor } alterado com sucesso!` ) ;
    }
}


aplicativo . get ( '/professor' ,  getProfessor ) ;
aplicativo . get ( '/professor/:id' ,  getProfessorById ) ;
aplicativo . post ( '/professor' ,  cadastroProfessores ) ;
aplicativo . put ( '/professor/:id' ,  updateProfessor ) ;
aplicativo . delete ( '/professor/:id' ,  deleteProfessor ) ;

aplicativo . ouvir ( 3000 ) ;