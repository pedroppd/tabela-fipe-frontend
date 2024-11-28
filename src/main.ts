import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter([])], // Adicione suas rotas aqui
}).catch((err) => console.error(err));
