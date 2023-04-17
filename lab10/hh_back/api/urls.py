
from django.urls import path

from.views import CompanyView, company_detail, VacancyView, vacancy_detail, vacancies_top, company_vacancies

urlpatterns = [
    path('companies/', CompanyView.as_view()),
    path('companies/<int:company_id>', company_detail),
    path('companies/<int:company_id>/vacancies', company_vacancies),
    path('vacancies/', VacancyView.as_view()),
    path('vacancies/<int:vacancy_id>', vacancy_detail),
    path('vacancies/top_ten', vacancies_top),
]
