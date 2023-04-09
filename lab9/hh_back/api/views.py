from django.http import JsonResponse
from .models import Company, Vacancy

def company_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False, json_dumps_params={'indent': 2})

def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
        company_json = company.to_json()
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company does not exist'}, json_dumps_params={'indent': 2})
    return JsonResponse(company_json, json_dumps_params={'indent': 2})

def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = company.vacancy_set.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company does not exist'}, json_dumps_params={'indent': 2})
    return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent': 2})

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent': 2})

def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        vacancy_json = vacancy.to_json()
    except Vacancy.DoesNotExist:
        return JsonResponse({'error': 'Vacancy does not exist'}, json_dumps_params={'indent': 2})
    return JsonResponse(vacancy_json, json_dumps_params={'indent': 2})

def vacancy_top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent': 2})
