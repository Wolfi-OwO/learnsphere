# UC: Course Management

## Beschreibung

Instructors can create, update, and manage courses. This includes adding descriptions, managing course visibility, and assigning instructors.

## Akteur(e)

* Primärer Akteur: Instructor

## Vorbedingung(en)

* The instructor must be logged in.

## Nachbedingung(en)

* The course is created or updated successfully.

## Trigger(s)

* The instructor initiates course creation or update.

## Normaler Ablauf:

1. The instructor navigates to the course management page.
2. The instructor fills in the course details.
3. The system validates the input.
4. The system saves the course information.
5. A confirmation message is displayed.

## Alternative Abläufe:

3.1 If the input is invalid, an error message is displayed, and the instructor is prompted to correct the input.

## UML Aktivitätsdiagramm

```plantuml
@startuml
start
:Instructor navigates to course management page;
:Instructor fills in course details;
if (Is input valid?) then (Yes)
  :Save course information;
  :Display confirmation message;
else (No)
  :Display error message;
  :Prompt instructor to correct input;
endif
stop
@enduml
```