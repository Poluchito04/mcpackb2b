---
description: Despliegue de McPack en Vercel vía GitHub
---

He preparado el repositorio local para ti. Solo tienes que seguir estos 3 pasos:

### 1. Crear el repositorio en GitHub
1. Ve a [github.com/new](https://github.com/new).
2. Ponle un nombre (ej: `mcpack-b2b`).
3. Déjalo como **Public** o **Private** (según prefieras) y dale a **Create repository**.
4. Copia la URL que termina en `.git` (será algo como `https://github.com/tu-usuario/mcpack-b2b.git`).

### 2. Vincular y Subir el Código
Abre tu terminal en la carpeta del proyecto y ejecuta estos comandos (sustituyendo la URL por la tuya):

```bash
# 1. Vincular el repositorio remoto
git remote add origin https://github.com/tu-usuario/mcpack-b2b.git

# 2. Subir los archivos
git branch -M main
git push -u origin main
```

### 3. Conectar a Vercel
1. Ve a tu panel de [Vercel](https://vercel.com/dashboard).
2. Haz clic en **Add New...** > **Project**.
3. Selecciona el repositorio `mcpack-b2b` que acabas de subir.
4. En "Framework Preset", selecciona **Other** (ya que es HTML/JS puro).
5. Haz clic en **Deploy**.

¡Listo! Vercel te dará una URL (ej: `mcpack-b2b.vercel.app`) y la web estará online con todas las animaciones premium funcionando.
