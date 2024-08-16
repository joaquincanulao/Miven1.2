import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./page/inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: 'recetas',
    loadChildren: () => import('./page/recetas/recetas.module').then( m => m.RecetasPageModule)
  },
  {
    path: 'add-item',
    loadChildren: () => import('./page/add-item/add-item.module').then( m => m.AddItemPageModule)
  },
  {
    path: 'almuerzo',
    loadChildren: () => import('./page/almuerzo/almuerzo.module').then( m => m.AlmuerzoPageModule)
  },
  {
    path: 'cena',
    loadChildren: () => import('./page/cena/cena.module').then( m => m.CenaPageModule)
  },
  {
    path: 'desayunos',
    loadChildren: () => import('./page/desayunos/desayunos.module').then( m => m.DesayunosPageModule)
  },
  {
    path: 'postres',
    loadChildren: () => import('./page/postres/postres.module').then( m => m.PostresPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
