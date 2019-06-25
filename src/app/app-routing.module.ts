import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'materi', loadChildren: './materi/materi.module#MateriPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'khas', loadChildren: './khas/khas.module#KhasPageModule' }, 
  { path: 'khas1', loadChildren: './khas1/khas1.module#Khas1PageModule' },
  { path: 'khas2', loadChildren: './khas2/khas2.module#Khas2PageModule' },
  { path: 'khas3', loadChildren: './khas3/khas3.module#Khas3PageModule' },
  { path: 'khas4', loadChildren: './khas4/khas4.module#Khas4PageModule' },
  { path: 'khas5', loadChildren: './khas5/khas5.module#Khas5PageModule' },
  { path: 'kue1', loadChildren: './kue1/kue1.module#Kue1PageModule' },
   { path: 'kue2', loadChildren: './kue2/kue2.module#Kue2PageModule' },
  { path: 'kue3', loadChildren: './kue3/kue3.module#Kue3PageModule' },
  { path: 'kue4', loadChildren: './kue4/kue4.module#Kue4PageModule' },
  { path: 'sharing', loadChildren: './sharing/sharing.module#SharingPageModule' },
  { path: 'jpn', loadChildren: './jpn/jpn.module#JpnPageModule' },
  { path: 'kor', loadChildren: './kor/kor.module#KorPageModule' },
  { path: 'cin', loadChildren: './cin/cin.module#CinPageModule' },
  { path: 'thi', loadChildren: './thi/thi.module#ThiPageModule' },
  { path: 'may', loadChildren: './may/may.module#MayPageModule' },
  { path: 'phi', loadChildren: './phi/phi.module#PhiPageModule' },
  { path: 'bru', loadChildren: './bru/bru.module#BruPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
