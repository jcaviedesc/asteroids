import { spawn } from "child_process";
import ora from "ora";

// Crea un indicador de carga
const spinner = ora("Building...");

// Ejecuta el script 'build'
spinner.start();
const buildProcess = spawn("npm", ["run", "build"]);

buildProcess.stdout.on("data", (data) => {
  // Imprime la salida estándar del proceso de build
  console.log(data.toString());
});

buildProcess.stderr.on("data", (data) => {
  // Imprime la salida de error del proceso de build
  console.error(data.toString());
});

buildProcess.on("error", (error) => {
  console.error(`Error during build: ${error.message}`);
});

buildProcess.on("close", (code) => {
  if (code === 0) {
    spinner.stop();
    console.log("Build successful");

    // Ejecuta el script 'start'
    console.log("Starting the application...");
    const startProcess = spawn("npm", ["run", "start:api"]);

    startProcess.stdout.on("data", (data) => {
      // Imprime la salida estándar del proceso de start
      console.log(data.toString());
    });

    startProcess.stderr.on("data", (data) => {
      // Imprime la salida de error del proceso de start
      console.error(data.toString());
    });

    startProcess.on("error", (error) => {
      console.error(`Error during start: ${error.message}`);
    });
  } else {
    console.error("Build failed");
  }
});

// import { exec } from "child_process";
// import ora from "ora";

// // Crea un indicador de carga
// const spinner = ora("Building...");

// // Ejecuta el script 'build'
// spinner.start();
// exec("npm run build", (error, stdout, stderr) => {
//   spinner.stop();
//   if (error) {
//     console.error(`Error during build: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`Build script returned an error: ${stderr}`);
//     return;
//   }
//   console.log("Build successful");

//   // Ejecuta el script 'start'
//   console.log("Starting the application...");
//   exec("npm run start:api", (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error during start: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.error(`Start script returned an error: ${stderr}`);
//       return;
//     }
//     console.log("Application started");
//   });
// });
