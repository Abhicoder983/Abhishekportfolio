from django.shortcuts import render
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

# Ensure you have the correct email settings in your settings.py

def contact(request):
    if request.method == 'POST':
        print('POST request received')
        name = request.POST.get('name')
        email = request.POST.get('email')
        organization = request.POST.get('organization')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        
        # Debugging print statements
        print(f'Name: {name}')
        print(f'Email: {email}')
        print(f'Organization: {organization}')
        print(f'Subject: {subject}')
        print(f'Message: {message}')
        
        if name and email and subject and message:
            recipient_list = ['ruhelabhishek@gmail.com']
            email_content = f"Name: {name}\nEmail: {email}\nOrganization: {organization}\nSubject: {subject}\nMessage: {message}\n"
            print('Attempting to send email...')
            
            send_mail(
                'OFFER FOR JOB',
                email_content,
                settings.EMAIL_HOST_USER,  # Ensure EMAIL_HOST_USER is set correctly in settings.py
                recipient_list
            )
            print('Email sent successfully')
            return render(request, 'success.html')
        else:
            return render(request, 'contact.html', {'error': 'Please fill out all fields.'})
    else:
        return render(request, 'contact.html')
