from django.db import models
from django.conf import settings
from jobs.models import Job

class Application(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    applicant = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    resume = models.FileField(upload_to='resumes/')

    class Meta:
        unique_together = ('job', 'applicant')
