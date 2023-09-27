# TO CLEAR COMMAND PROMPT SCREEN:

cls

# TO CREATE A FILE WITH SOME TEXT:

echo 'hello world' > hello.txt

# TO OVERRIDE TEXT IN A FILE:

echo 'Override text' > hello.txt

# APPEND TEXT IN A FILE:

echo 'More text' >> hello.txt

# TO SEE WHAT IS INSIDE OF A FILE:

type hello.ext

# TO DELETE A FILE:

del hello.txt

# TO COPY A FOLDER:

copy folder1 folder2

_NOTE: This won't copy any subfolders._

# TO COPY A FOLDER INCLUDING ALL SUBFOLDERS AND FILES:

xcopy folder1 folder2 /s

# TO MOVE A FOLDER:

move folder1 folder2

# TO LIST DIRECTORIES:

dir

# TO LIST A SPECIFIC TYPES OF FILES:

dir \*.mp4

# TO SEE WHAT A COMMAND DOES, PRESS /? IN FRONT OF THE COMMAND:

dir /?

# TO CHANGE DRIVE:

C:

# TO MAKE DIRECTORY:

mkdir DIRECTORY_NAME

# TO REMOVE DIRECTORY:

rmdir DIRECTORY_NAME

_NOTE: This command deletes only empty directory._

# TO REMOVE A DIRECTORY WITH SUB DIRECTORIES AND CONTENTS:

rmdir /s DIRECTORY_NAME

# TO SEE ALL HIDDEN DIRECTORIES:

dir /a
