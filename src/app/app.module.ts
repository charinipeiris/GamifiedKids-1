import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes,RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { Grade1Component } from './grade1/grade1.component';
import { Grade2Component } from './grade2/grade2.component';
import { EnglishComponent } from './Grade1/english/english.component';
import { Level1Component } from './Grade1/Maths/level1/level1.component';
import { Level2Component } from './Grade1/Maths/level2/level2.component';
import { Level3Component } from './Grade1/Maths/level3/level3.component';
import { CountingComponent } from './Grade1/Maths/Level1/Numbers/counting/counting.component';
import { NumberingconceptsComponent } from './Grade1/Maths/Level1/Numbers/numberingconcepts/numberingconcepts.component';
import { AdditionComponent } from './Grade1/Maths/Level1/Numbers/addition/addition.component';
import { SubstractionComponent } from './Grade1/Maths/Level1/Numbers/substraction/substraction.component';
import { LengthComponent } from './Grade1/Maths/Level1/Measurements/length/length.component';
import { WeightComponent } from './Grade1/Maths/Level1/Measurements/weight/weight.component';
import { VolumeComponent } from './Grade1/Maths/Level1/Measurements/volume/volume.component';
import { TimeComponent } from './Grade1/Maths/Level1/Measurements/time/time.component';
import { CurrencyComponent } from './Grade1/Maths/Level1/currency/currency.component';
import { ShapesComponent } from './Grade1/Maths/Level1/shapes/shapes.component';
import { HeightComponent } from './Grade1/Maths/Level2/Measurements/height/height.component';
import { NumberingComponent } from './Grade1/Maths/Level3/Numbers/numbering/numbering.component';
import { MathsComponent } from './Grade1/Maths/maths/maths.component';



const appRoutes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'signin',component:SigninComponent},
  {path:'grade1',component:Grade1Component},
  {path:'grade2',component:Grade2Component},
  {path:'grade1/maths',component:MathsComponent},
  {path:'home',component:HomeComponent},
  {path:'grade1/maths/level1',component:Level1Component},
  {path:'grade1/maths/level2',component:Level2Component},
  {path:'grade1/maths/level3',component:Level3Component},
  {path:'grade2/maths/level1',component:Level1Component},
  {path:'grade2/maths/level2',component:Level2Component},
  {path:'grade3/maths/level3',component:Level3Component},
 
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    SigninComponent,
    Grade1Component,
    Grade2Component,
    EnglishComponent,
    Level1Component,
    Level2Component,
    Level3Component,
    CountingComponent,
    NumberingconceptsComponent,
    AdditionComponent,
    SubstractionComponent,
    LengthComponent,
    WeightComponent,
    VolumeComponent,
    TimeComponent,
    CurrencyComponent,
    ShapesComponent,
    HeightComponent,
    NumberingComponent,
    MathsComponent,
  
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(appRoutes)],
     ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
