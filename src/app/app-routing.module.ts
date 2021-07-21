import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SecurityGuard } from "@core/guard/security.guard";

import { HomeComponent } from "@home/home.component";
import { AfiliadoComponent } from "./feature/afiliado/components/afiliado/afiliado.component";
import { CrearAfiliadoComponent } from "./feature/afiliado/components/crear-afiliado/crear-afiliado.component";
import { EntradaComponent } from "./feature/entrada/components/entrada/entrada.component";
import { CrearEntradaComponent } from "./feature/entrada/components/crear-entrada/crear-entrada.component";
import { EditarAfiliadoComponent } from "./feature/afiliado/components/editar-afiliado/editar-afiliado.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [SecurityGuard] },
  {
    path: "producto",
    loadChildren: () =>
      import("@producto/producto.module").then((mod) => mod.ProductoModule),
  },
  { path: "afiliado", component: AfiliadoComponent },
  { path: "registroafiliado", component: CrearAfiliadoComponent },
  { path: "entrada", component: EntradaComponent },
  { path: "ventaentrada", component: CrearEntradaComponent },
  { path: "afiliado/editarafiliado/:id", component: EditarAfiliadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
