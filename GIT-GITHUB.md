GIT Y GITHUB

git config --> Comando principal

CONFIGURAR IDENTIDAD
git config --global user.name "user name"
git config --global user.email "user@mail"

VER LISTA DE CONFIGURACION
git config --list

COMPROBAR VALOR DE UNA CLAVE ESPECÍFICA
Ejemplo 1 : git config user.name ==> ver el nombre asignado
Ejemplo 2 : git config user.mail ==> ver el correo asignado

VER MANUAL
git help
git help config ==> en la web

INICIALIZAR REPOSITORIO
git init ==> estar en la raíz del directorio del proyecto

git clone ==> clonar repositorio de un proyecto
git add <file> ==> dar seguimiento a archivo
git status ==> ver el estado de los archivos
git diff ==> ver cambios sin preparar más a detalle
git diff --staged ==> compara cambios preparados con último commit
git commit ==> entra al vim o emacs (escribir mensaje de confirmacion)
git rm <file> ==> elimina archivo del proyecto
git mv <file_from> <file_to> => renombrar archivo

LOGS
git log ==> ver historial de commits
git log -p ==> ver historial de commits con más detalle
git log -<n> ==> ver los útlimos n commits
git log --pretty=format:"" ==> ver log con formato

FORMATOS PARA LOG PRETTY
%H Hash de la confirmación
%h Hash de la confirmación abreviado
%T Hash del árbol
%t Hash del árbol abreviado
%P Hashes de las confirmaciones padre
%p Hashes de las confirmaciones padre abreviados
%an Nombre del autor
%ae Dirección de correo del autor
%ad Fecha de autoría (el formato respeta la opción -–date)
%ar Fecha de autoría, relativa
%cn Nombre del confirmador
%ce Dirección de correo del confirmador
%cd Fecha de confirmación
%cr Fecha de confirmación, relativa
%s Asunto

OPCIONES DE LOG
-p Muestra el parche introducido en cada confirmación.
--stat Muestra estadísticas sobre los archivos modificados en cada confirmación.
--shortstat Muestra solamente la línea de resumen de la opción --stat.
--name-only Muestra la lista de archivos afectados.
--name-status Muestra la lista de archivos afectados, indicando además si fueron añadidos,
modificados o eliminados.
--abbrev-commit Muestra solamente los primeros caracteres de la suma SHA-1, en vez de los 40
caracteres de que se compone.
--relative-date Muestra la fecha en formato relativo (por ejemplo, “2 weeks ago” (“hace 2
semanas”)) en lugar del formato completo.
--graph Muestra un gráfico ASCII con la historia de ramificaciones y uniones.
--pretty Muestra las confirmaciones usando un formato alternativo. Posibles opciones
son oneline, short, full, fuller y format (mediante el cual puedes especificar tu
propio formato).

LOGS PERSONALIZADOS
git log --since=2.weeks ==> muestra logs de las últimas 2 semanas
git log --since="2021-17-09" ==> muestra log desde fecha indicada
git log --since="2 years 1 day 3 minutes ago"
git log --author <user.name> ==> filtra log por autor

OPCIONES PARA LIMITAR SALIDAS DEL GITLOG
-(n) Muestra solamente las últimas n confirmaciones
--since, --after Muestra aquellas confirmaciones hechas después de la fecha
especificada.
--until, --before Muestra aquellas confirmaciones hechas antes de la fecha
especificada.
--author Muestra sólo aquellas confirmaciones cuyo autor coincide con la
cadena especificada.
--committer Muestra sólo aquellas confirmaciones cuyo confirmador coincide
con la cadena especificada.
-S Muestra sólo aquellas confirmaciones que añaden o eliminen
código que corresponda con la cadena especificada.

DESHACER COSAS
git commit --amend ==> reemplazar cambios de un commit
git reset HEAD <file> ==> deshacer preparación (git add <file>)
git checkout -- <file> ==> deshacer cambios del archivo antes de prepararlo (git add)

TRABAJO EN REMOTOS
git remote ==> muestra los remotos configurados
git remote -v ==> muestra los remotos con sus urls
git remote add [name] [url] ==> agregar nuevo remoto y referenciarlo a un nombre
git pull ==> trae datos del servidor y los combina con el trabajo realizado
git push [nombre-remoto] [rama] ==> compartir proyecto
git fetch [proyect-name] ==> muestra información del repositorio
git remote rename [nombre-remoto] [nuevo-nombre] ==> cambia el nombre del remoto
git remote rm [nombre-remot] ==> elimina el remoto
git branch ==> listar ramas (* muestra la rama asignada)
git branch [nombre-rama] ==> crea una nueva rama
git branch -d [nombre-rama] ==> eliminar
git checkout [nombre-rama] ==> saltar a esa rama
git checkout -b [nombre-rama] ==> crear rama y saltarse a ella

--RECOMENDACION: No saltara otras ramas si no hay cambios confirmados, de preferencia tener el árbol de trabajo limpio

git merge [nombre-rama] ==> incorporar cambios de [nombre-rama] a la rama principal
