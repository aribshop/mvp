// todo don't hard code the Enum values

export enum Templates {
  Ecommerce = "1",
  Dentist = "2",
  Food = "3",
}

export enum ProductTemplates {
  Landing = "1",
  WithSuggestions = "2",
  popup = "3",
  list = "4",
}

export default interface ITemplate {
  title: string;
  description: string;
}
