# template-vite-vue-shadcdn

A robust UI-focused template featuring **Vue 3**, **Vite 8**, and **Shadcn-Vue 2.4.3** with **Tailwind CSS 4**.

## ✨ Features
* **Vite 8**: Cutting-edge build performance.
* **Shadcn-Vue 2.4.3**: Highly customizable, accessible UI components.
* **Tailwind CSS 4**: The latest evolution of utility-first styling.
* **unplugin-vue-components**: Seamlessly auto-imports both your custom components and Shadcn UI components.

## 🛠 Quick Start (via tiged)
  Scaffold this template instantly without cloning the full git history:
  
  ```bash
  npx tiged ddjarvis/template-vite-vue-shadcn my-new-project
  cd my-new-project
  npm install
  npm run dev
  ```
  _(**my-new-project** should be the name you want for the project)_

## 🚀 Installation (Alternative)

1.  **Clone the template:**
    ```bash
    git clone https://github.com/ddjarvis/template-vite-vue-shadcdn.git
    cd template-vite-vue-shadcdn
    ```

2.  **Install dependencies:**
    Choose your preferred package manager (a fresh lockfile will be generated):
  
    _**Using NPM**_
    ```bash
    npm install
    ```
  
    _**Using Yarn**_
    ```bash
    yarn install
    ```
  
    _**Using PNPM**_
    ```bash
    pnpm install
    ```

3.  🧩 **Adding UI Components**
    To add new Shadcn components to your project, use the CLI command for your specific package manager:

    **Using npm:**
    ```bash
    npx run add-all-components
    ```
    
    **Using yarn:**
    ```bash
    yarn add-all-components
    ```
    
    **Using pnpm:**
    ```bash
    pnpm add-all-components
    ```
    
    > Instead of **add-all-components** you may also use **add-component _component_** to add specific components only.

4.  **Launch development server:**
  
    _**Using NPM**_
    ```bash
    npm run dev
    ```
  
    _**Using Yarn**_
    ```bash
    yarn dev
    ```
  
    _**Using PNPM**_
    ```bash
    pnpm dev
    ```

## 🛠 Project Structure
Components placed in the `src/components` directory are automatically available in your templates thanks to `unplugin-vue-components`.

## 📖 Learn More
Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
