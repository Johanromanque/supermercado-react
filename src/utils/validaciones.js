const REGEX_TEXTO = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s.,º°#-]{2,60}$/;

export const validarFormularioProducto = (valores) => {
  const errores = {};

  // Nombre
  const nombre = valores.nombre?.trim() || "";
  if (!nombre) {
    errores.nombre = "El nombre del producto es obligatorio.";
  } else if (!REGEX_TEXTO.test(nombre)) {
    errores.nombre = "Debe tener entre 2 y 60 caracteres válidos.";
  }

  // Marca
  const marca = valores.marca?.trim() || "";
  if (!marca) {
    errores.marca = "La marca es obligatoria.";
  } else if (!REGEX_TEXTO.test(marca)) {
    errores.marca = "La marca debe contener entre 2 y 60 caracteres.";
  }

  // Tipo / Categoría
  if (!valores.tipo) {
    errores.tipo = "Selecciona una categoría.";
  }

  // Stock
  if (valores.stock === "" || valores.stock === null || valores.stock === undefined) {
    errores.stock = "El stock es obligatorio.";
  } else {
    const stockNum = Number(valores.stock);
    if (!Number.isInteger(stockNum) || stockNum < 0) {
      errores.stock = "El stock debe ser un número entero mayor o igual a 0.";
    }
  }

  // Precio
  if (valores.precio === "" || valores.precio === null || valores.precio === undefined) {
    errores.precio = "El precio es obligatorio.";
  } else {
    const precioNum = Number(valores.precio);
    if (!Number.isFinite(precioNum) || precioNum <= 0) {
      errores.precio = "El precio debe ser un número mayor a $0.";
    }
  }

  return {
    esValido: Object.keys(errores).length === 0,
    errores,
  };
};
