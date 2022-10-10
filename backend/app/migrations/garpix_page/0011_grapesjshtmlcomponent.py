# Generated by Django 3.1 on 2022-10-04 20:30

from django.db import migrations, models
import django.db.models.deletion
import garpix_page.fields.grapes_js_html


class Migration(migrations.Migration):

    dependencies = [
        ('garpix_page', '0010_auto_20220829_0835'),
    ]

    operations = [
        migrations.CreateModel(
            name='GrapesJsHtmlComponent',
            fields=[
                ('basecomponent_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='garpix_page.basecomponent')),
                ('html', garpix_page.fields.grapes_js_html.GrapesJsHtmlField()),
            ],
            options={
                'verbose_name': 'GrapesJs компонент',
                'verbose_name_plural': 'GrapesJs компоненты',
            },
            bases=('garpix_page.basecomponent',),
        ),
    ]
