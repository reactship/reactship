
import path from 'path'
import fs from 'fs'
import chalk from 'chalk'

const base = path.resolve('.')

const run = (program, command, argv) => {
  console.log(chalk.white.bold('\nReactship is Shipping! 🔥\n'))
  console.log('CONFIG', program.config)
  console.log('ARGV', argv)
  console.log('CMD', command)
  switch (command) {
    case 'foo':
      foo(program.config)
      break
  }
}

function foo (c) {
  console.log('FOO:', c)
}

export default { run }
