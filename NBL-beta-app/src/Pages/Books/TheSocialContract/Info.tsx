import Authors from "../../Authors/Authors"

const BookInfo = {
  title: "The Social Contract",
  key: "books/the-social-contract",
  
  cover: "https://i.pinimg.com/736x/d1/0e/6d/d10e6d8261c6c3216951d6d7731ea5de.jpg",

  authors: [
    {
      role: "author",
      data: Authors.Author_JeanJacquesRousseau,
    },

    {
      role: "translater",
      data: Authors.Author_GeorgeDouglasHowardCole,
    }
  ],

  catagories: {},

  brief: "The Social Contract, originally published as On the Social Contract; or, Principles of Political Right (French: Du contrat social; ou, Principes du droit politique), is a 1762 French-language book by the Genevan philosopher Jean-Jacques Rousseau. The book theorizes about how to establish legitimate authority in a political community, that is, one compatible with individual freedom, in the face of the problems of commercial society, which Rousseau had already identified in his Discourse on Inequality (1755).",
}

export default BookInfo