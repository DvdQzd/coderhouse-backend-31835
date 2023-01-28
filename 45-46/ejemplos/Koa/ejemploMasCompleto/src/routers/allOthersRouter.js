export default function handler(ctx) {
  ctx.response.body = {
    msg: 'ruta no encontrada',
    ruta: `${ctx.URL}`,
  }
}
