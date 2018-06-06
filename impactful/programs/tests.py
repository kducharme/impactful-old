from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager
from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from datetime import datetime

class ContentManager(models.Manager):
    def get_safe(self, **kwargs):
        try:
            return self.get(**kwargs)
        except ObjectDoesNotExist:
            return None
class ActiveManager(ContentManager):
    def get_queryset(self):
        return super(ActiveManager, self).get_queryset().filter(active=True)
class UserContentManager(UserManager):
    def get_safe(self, **kwargs):
        try:
            return self.get(**kwargs)
        except ObjectDoesNotExist:
            return None
    def get_queryset(self):
        return super(UserContentManager, self).get_queryset().filter(date_deleted=None)
class UserGraveyardManager(UserManager):
    def get_safe(self, **kwargs):
        try:
            return self.get(**kwargs)
        except ObjectDoesNotExist:
            return None
# TODO: set cascading to null on things we don't want to delete and go through defaults and null values
class User(AbstractUser):
    role = models.CharField(max_length=30, default=None, blank=True, null=True)
    first_name = models.CharField(max_length=32, default=None, blank=True, null=True)
    middle_name = models.CharField(max_length=32, default=None, blank=True, null=True)
    last_name = models.CharField(max_length=32, default=None, blank=True, null=True)
    email = models.CharField(max_length=64, unique=True)
    date_created = models.DateField(auto_now_add=True)
    date_deleted = models.DateField(null=True)
    objects = UserContentManager()
    graveyard = UserGraveyardManager()
class ProjectType(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True)
    date_created = models.DateField(auto_now_add=True)
    date_deleted = models.DateField(null=True)
class Task(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True)
    date_created = models.DateField(auto_now_add=True)
    date_deleted = models.DateField(null=True)
class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True)
    date_created = models.DateField(auto_now_add=True)
    date_completed = models.DateField(null=True)
    date_deleted = models.DateField(null=True)
    project_type = models.ForeignKey(ProjectType, related_name="projects", null=True, on_delete=models.SET_NULL)
class ProjectTask(models.Model):
    date_created = models.DateField(auto_now_add=True)
    due_date = models.DateField()
    date_completed = models.DateField(null=True)
    date_deleted = models.DateField(null=True)
    project = models.ForeignKey(Project, related_name="project_tasks", null=True, on_delete=models.SET_NULL)
    task = models.ForeignKey(Task, related_name="project_tasks", null=True, on_delete=models.SET_NULL)
    owner = models.ForeignKey(User, related_name="project_tasks", null=True, on_delete=models.SET_NULL)
class Location(models.Model):
    street_address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state_province = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    date_created = models.DateField(auto_now_add=True)
    date_deleted = models.DateField(null=True)
# TODO: figure out relations so that we can chain things easily (or decide if this is necessary)
class ProjectLocation(models.Model):
    location = models.ForeignKey(Location, related_names="project_locations", on_delete=models.CASCADE)
    project = models.ForeignKey(Project, related_names="project_locations", on_delete=models.CASCADE)
class Organization(models.Model):
    name = models.CharField(max_length=255)
    mission = models.TextField(null=True)
    vision = models.TextField(null=True)
    location = models.ForeignKey(Location, related_names="organization", on_delete=models.SET_NULL, null=True)
class OrganizationUser(models.Model):
    organization = models.ForeignKey(Organization, related_names="organization", on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_names="organization__users", on_delete=models.CASCADE)
class Role(models.Model):
    name = models.CharField(max_length=255)
    organization = models.ForeignKey(Organization, related_names="roles", on_delete=models.SET_NULL, null=True)
class ProjectUser(models.Model):
    role = models.ForeignKey(Role, related_names="project_users", on_delete=models.SET_NULL, null=True)
    project = models.ForeignKey(Project, related_name="project_users", null=True)
    user = models.ForeignKey(User, related_name="project_users", null=True)
class Program(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True)
    date_created = models.DateField(auto_now_add=True)
    date_archived = models.DateField(null=True)
    date_deleted = models.DateField(null=True)
    budget = models.FloatField(null=True)
    organization = models.ForeignKey(Organization, related_name="programs", null=True, on_delete=models.SET_NULL)
class ProgramObjective(models.Model):
    text = models.TextField()
    program = models.ForeignKey(Program, related_name="program_objectives", null=True, on_delete=models.SET_NULL)
class ProjectImage(models.Model):
    image = models.TextField()
    name = models.CharField(max_length=255, null=True)
    description = models.TextField(null=True)
    date_created = models.DateField(auto_now_add=True)
    date_deleted = models.DateField(null=True)
    project = models.ForeignKey(Project, related_name="project_images", null=True, on_delete=models.SET_NULL)
class ProjectNote(models.Model):
    text = models.TextField()
    date_created = models.DateField(auto_now_add=True)
    date_deleted = models.DateField(null=True)
    author = models.ForeignKey(User, related_name="project_notes", null=True, on_delete=models.SET_NULL)
    image = models.ForeignKey(ProjectImage, related_name="project_notes", null=True, on_delete=models.SET_NULL)
class ProjectGroup(models.Model):
    name = models.CharField(max_length=255)
    date_created = models.DateField(auto_now_add=True)
    date_deleted = models.DateField(null=True)
    public = models.BooleanField(default=True)
    creator = models.ForeignKey(User, related_name="project_groups", null=True, on_delete=models.SET_NULL)