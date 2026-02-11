# UC: Session Management

## Beschreibung

Instructors can add and manage sessions within courses. This includes setting availability dates and updating session details.

## Akteur(e)

* Primärer Akteur: Instructor

## Vorbedingung(en)

* The instructor must be logged in.
* A course must exist.

## Nachbedingung(en)

* The session is created or updated successfully.

## Trigger(s)

* The instructor initiates session creation or update.

## Normaler Ablauf:

1. The instructor navigates to the session management page.
2. The instructor fills in the session details.
3. The system validates the input.
4. The system saves the session information.
5. A confirmation message is displayed.

## Alternative Abläufe:

3.1 If the input is invalid, an error message is displayed, and the instructor is prompted to correct the input.

## UML Aktivitätsdiagramm

```plantuml
@startuml
start
:Instructor navigates to session management page;
:Instructor fills in session details;
if (Is input valid?) then (Yes)
  :Save session information;
  :Display confirmation message;
else (No)
  :Display error message;
  :Prompt instructor to correct input;
endif
stop
@enduml
```