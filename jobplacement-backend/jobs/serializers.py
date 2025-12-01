from rest_framework import serializers
from .models import Job

class JobSerializer(serializers.ModelSerializer):
    recruiter = serializers.StringRelatedField()

    class Meta:
        model = Job
        fields = '__all__'
