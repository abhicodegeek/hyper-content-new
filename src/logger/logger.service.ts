import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppLogger extends Logger {
  private logFilePath: string;

  constructor() {
    super();
    this.logFilePath = path.resolve('logs', 'app.log');

    // Ensure logs directory exists
    if (!fs.existsSync(path.dirname(this.logFilePath))) {
      fs.mkdirSync(path.dirname(this.logFilePath), { recursive: true });
    }
  }

  log(message: string, context?: string): void {
    super.log(message, context);
    this.writeToFile('LOG', message, context);
  }

  error(message: string, trace?: string, context?: string): void {
    super.error(message, trace, context);
    this.writeToFile('ERROR', message, context, trace);
  }

  warn(message: string, context?: string): void {
    super.warn(message, context);
    this.writeToFile('WARN', message, context);
  }

  debug(message: string, context?: string): void {
    super.debug(message, context);
    this.writeToFile('DEBUG', message, context);
  }

  verbose(message: string, context?: string): void {
    super.verbose(message, context);
    this.writeToFile('VERBOSE', message, context);
  }

  private writeToFile(
    level: string,
    message: string,
    context?: string,
    trace?: string,
  ): void {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} [${level}] ${context || ''} - ${message}`;
    if (trace) {
      fs.appendFileSync(this.logFilePath, `${logMessage}\nTrace: ${trace}\n`);
    } else {
      fs.appendFileSync(this.logFilePath, `${logMessage}\n`);
    }
  }
}
