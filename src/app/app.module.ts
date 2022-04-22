import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { rootReducer } from '.';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { CandidateCvViewComponent } from './features/customers/candidate/candidate-Cv-view/candidate-cv-view/candidate-cv-view.component';
import { CandidateJobExperinceFormComponent } from './features/customers/candidate/candidate-jobExperince/candidate-job-experince-form/candidate-job-experince-form.component';
import { JobExperienceViewComponent } from './features/customers/candidate/candidate-jobExperince/job-experience-view/job-experience-view.component';
import { CandidateLanguageFormComponent } from './features/customers/candidate/candidate-language/candidate-language-form/candidate-language-form.component';
import { LanguageViewComponent } from './features/customers/candidate/candidate-language/language-view/language-view.component';
import { CandidateLinkedinAddComponent } from './features/customers/candidate/candidate-linkedinAcount-add/candidate-linkedin-add/candidate-linkedin-add.component';
import { LinkedinViewComponent } from './features/customers/candidate/candidate-linkedinAcount-add/linkedin-view/linkedin-view.component';
import { CandidateListComponent } from './features/customers/candidate/candidate-list/candidate-list.component';
import { CandidateSchoolFormComponent } from './features/customers/candidate/candidate-school/candidate-school-form/candidate-school-form.component';
import { SchoolUpdateComponent } from './features/customers/candidate/candidate-school/school-update/school-update.component';
import { SchoolViewComponent } from './features/customers/candidate/candidate-school/school-view/school-view.component';
import { CandidateSkillFromComponent } from './features/customers/candidate/candidate-skill/candidate-skill-from/candidate-skill-from.component';
import { SkillViewComponent } from './features/customers/candidate/candidate-skill/skill-view/skill-view.component';
import { CandidateWebsiteComponent } from './features/customers/candidate/candidate-website/candidate-website/candidate-website.component';
import { GithubViewComponent } from './features/customers/candidate/candidate-website/github-view/github-view.component';
import { ImageAddComponent } from './features/customers/candidate/image/image-add/image-add.component';
import { EmployerInfoComponent } from './features/customers/employer/employer-info/employer-info.component';
import { EmployerListComponent } from './features/customers/employer/employer-list/employer-list.component';
import { EmployerUpdateComponent } from './features/customers/employer/employer-update/employer-update.component';
import { SystemEmployeeUpdateComponent } from './features/customers/systemEmployee/systemEmployee-update/system-employee-update/system-employee-update.component';
import { CvAddComponent } from './features/cv/cv-add/cv-add.component';
import { CvUpdateComponent } from './features/cv/cv-update/cv-update/cv-update.component';
import { CvInfoComponent } from './features/cv/cv-view/cv-info/cv-info.component';
import { CvViewComponent } from './features/cv/cv-view/cv-view/cv-view.component';
import { FavoriteComponent } from './features/favorite/favorite.component';
import { FooterComponent } from './features/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { NaviCandidateInfoComponent } from './features/navi/navi-candidate-info/navi-candidate-info.component';
import { NaviEmployerInfoComponent } from './features/navi/navi-employer-info/navi-employer-info.component';
import { NaviSignComponent } from './features/navi/navi-sign/navi-sign.component';
import { NaviSystemEmployeeInfoComponent } from './features/navi/navi-system-employee-info/navi-system-employee-info.component';
import { NaviComponent } from './features/navi/navi/navi.component';
import { PositionAddComponent } from './features/position/position-add/position-add.component';
import { PositionListComponent } from './features/position/position-list/position-list.component';
import { CandidateSidebarInfoComponent } from './features/sidebar/candidate-sidebar-info/candidate-sidebar-info.component';
import { EmployerSidebarInfoComponent } from './features/sidebar/employer-sidebar-info/employer-sidebar-info.component';
import { SidebarComponent } from './features/sidebar/sidebar/sidebar.component';
import { SystemEmployeeSidebarInfoComponent } from './features/sidebar/systemEmployee-sidebar-info/system-employee-sidebar-info.component';
import { CandidateSignComponent } from './features/sign/candidate-sign/sign.component';
import { EmployerSignComponent } from './features/sign/employer-sign/employer-sign.component';
import { UserLoginComponent } from './features/user-login/user-login.component';
import { UserPasswordUpdateComponent } from './features/user-password-update/user-password-update.component';
import { JobAdvertisementComponent } from './job-advertisement/job-advertisement-add/job-advertisement.component';
import { JobAdvertisementListComponent } from './job-advertisement/job-advertisement-list/job-advertisement-list.component';
import { JobAdvertisementListByEmployerComponent } from './job-advertisement/job-advertisement-listByEmployer/job-advertisement-list-by-employer/job-advertisement-list-by-employer.component';
import { UnverifiedJobListComponent } from './job-advertisement/job-advertisement-unverifiedJobList/unverified-job-list/unverified-job-list.component';
import { FilterPipe } from './pipes/filter/filter.pipe';

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [
      {
        rootReducer: [''],
      },
    ],
    rehydrate: true,
  })(reducer);
}
@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CandidateSignComponent,
    EmployerSignComponent,
    NaviEmployerInfoComponent,
    NaviSignComponent,
    FooterComponent,
    PositionAddComponent,
    EmployerListComponent,
    CandidateListComponent,
    PositionListComponent,
    NaviSystemEmployeeInfoComponent,
    NaviCandidateInfoComponent,
    UserLoginComponent,
    HomeComponent,
    JobAdvertisementComponent,
    JobAdvertisementListComponent,
    JobAdvertisementListByEmployerComponent,
    CvAddComponent,
    CandidateSchoolFormComponent,
    CandidateSkillFromComponent,
    CandidateLanguageFormComponent,
    CandidateJobExperinceFormComponent,
    ImageAddComponent,
    FilterPipe,
    CandidateWebsiteComponent,
    CandidateLinkedinAddComponent,
    CandidateCvViewComponent,
    CvViewComponent,
    CvUpdateComponent,
    UnverifiedJobListComponent,
    FavoriteComponent,
    GithubViewComponent,
    SkillViewComponent,
    SchoolViewComponent,
    LinkedinViewComponent,
    LanguageViewComponent,
    JobExperienceViewComponent,
    SchoolUpdateComponent,
    SystemEmployeeUpdateComponent,
    UserPasswordUpdateComponent,
    EmployerUpdateComponent,
    EmployerInfoComponent,
    SidebarComponent,
    CandidateSidebarInfoComponent,
    EmployerSidebarInfoComponent,
    SystemEmployeeSidebarInfoComponent,
    AboutUsComponent,
    CvInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    AccordionModule,
    ToolbarModule,
    PanelMenuModule,
    ButtonModule,
    SplitButtonModule,
    TableModule,
    CardModule,
    FormsModule,
    StoreModule.forRoot(
      { rootReducer },
      {
        metaReducers,
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
