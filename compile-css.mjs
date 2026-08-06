import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

console.log("Compiling Tailwind CSS to inline React component...");

// Run tailwindcss CLI to compile the CSS
try {
  execSync('npx tailwindcss -i ./src/app/globals.css -o ./public/compiled-tailwind.css --minify', { stdio: 'inherit' });
  
  const css = fs.readFileSync('./public/compiled-tailwind.css', 'utf8');
  
  const componentCode = `// AUTO-GENERATED: Do not edit directly
import React from 'react';

export function InlineTailwind() {
  return <style dangerouslySetInnerHTML={{ __html: \`${css.replace(/\\/g, '\\\\').replace(/`/g, '\\`')}\` }} />;
}
`;

  fs.writeFileSync('./src/components/ui/InlineTailwind.tsx', componentCode);
  console.log("Successfully generated InlineTailwind.tsx!");
} catch (error) {
  console.error("Failed to compile Tailwind CSS:", error);
  process.exit(1);
}
