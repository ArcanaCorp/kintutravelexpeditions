export const slugify = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")                     // separa acentos
    .replace(/[\u0300-\u036f]/g, "")      // elimina acentos
    .replace(/–|—/g, "-")                 // guiones largos
    .replace(/[^a-z0-9\s-]/g, "")         // limpia símbolos
    .trim()
    .replace(/\s+/g, "-");                // espacios → guiones
