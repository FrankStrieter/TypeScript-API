import JsonDb = require('node-json-db');
import { Component } from '@nestjs/common';

export class DatabaseProvider<T> {
  private _db: JsonDb;
  constructor(public path: string) {
    this._db = new JsonDb(path, true, true);
  }

  all(): T[] {
    const all = this._db.getData('/');
    return Object.keys(all).map(key => all[key]);
  }

  single(guid: string): T {
    return this._db.getData(`/${guid}`);
  }

  delete(guid: string): void {
    this._db.delete(`/${guid}`);
  }

  upsert(entity: T) {
    this._db.push(`/${entity['guid']}`, entity, true);
  }
}
