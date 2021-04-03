/**
 * Copyright 2013-2021 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const DatabaseChangelogLiquibaseGenerator = require('generator-jhipster/generators/database-changelog-liquibase');

// const { addEntityFiles, updateEntityFiles, updateConstraintsFiles, updateMigrateFiles, fakeFiles } = require('./files');

/* eslint-disable consistent-return */
module.exports = class extends DatabaseChangelogLiquibaseGenerator {
  constructor(args, opts) {
    super(args, { fromBlueprint: true, ...opts }); // fromBlueprint variable is important
  }

  get loading() {
    return this._loading();
  }

  get preparing() {
    return this._preparing();
  }

  get preparingRelationships() {
    return this._preparingRelationships();
  }

  get default() {
    return this._default();
  }

  get writing() {
    return this._writing();
    // return {
    //   ...this._writing(),
    //   ...{
    //     writeLiquibaseFiles() {
    //       const config = this.jhipsterConfig;
    //       if (config.skipServer || this.entity.skipServer || config.databaseType !== 'sql') {
    //         return undefined;
    //       }
    //
    //       const databaseChangelog = this.databaseChangelog;
    //
    //       /* Required by the templates */
    //       Object.assign(this, {
    //         databaseChangelog,
    //         changelogDate: databaseChangelog.changelogDate,
    //         databaseType: this.entity.databaseType,
    //         prodDatabaseType: this.entity.prodDatabaseType,
    //         authenticationType: this.entity.authenticationType,
    //         jhiPrefix: this.entity.jhiPrefix,
    //         skipFakeData: this.entity.skipFakeData || config.skipFakeData,
    //         reactive: config.reactive,
    //       });
    //
    //       if (databaseChangelog.type === 'entity-new') {
    //         return this._writeLiquibaseFiles();
    //       }
    //       if (
    //         this.addedFields.length > 0 ||
    //         this.removedFields.length > 0 ||
    //         this.addedRelationships.some(relationship => relationship.shouldWriteRelationship || relationship.shouldWriteJoinTable) ||
    //         this.removedRelationships.some(relationship => relationship.shouldWriteRelationship || relationship.shouldWriteJoinTable)
    //       ) {
    //         return this._writeUpdateFiles();
    //       }
    //       return undefined;
    //     }
    //   }
    // };
  }

  get postWriting() {
    return this._postWriting();
  }
  //
  // /**
  //  * Write files for new entities.
  //  */
  // _writeLiquibaseFiles() {
  //   const promises = [];
  //   // Write initial liquibase files
  //   promises.push(this.writeFilesToDisk(addEntityFiles, this, false, this.sourceRoot()));
  //   if (!this.skipFakeData) {
  //     promises.push(this.writeFilesToDisk(fakeFiles, this, false, this.sourceRoot()));
  //   }
  //
  //   return Promise.all(promises);
  // }
  //
  // /**
  //  * Write files for updated entities.
  //  */
  // _writeUpdateFiles() {
  //   this.hasFieldConstraint = this.addedFields.some(field => field.unique || !field.nullable);
  //   this.hasRelationshipConstraint = this.addedRelationships.some(
  //     relationship =>
  //       (relationship.shouldWriteRelationship || relationship.shouldWriteJoinTable) && (relationship.unique || !relationship.nullable)
  //   );
  //   this.shouldWriteAnyRelationship = this.addedRelationships.some(
  //     relationship => relationship.shouldWriteRelationship || relationship.shouldWriteJoinTable
  //   );
  //
  //   const promises = [];
  //   promises.push(this.writeFilesToDisk(updateEntityFiles, this, false, this.sourceRoot()));
  //
  //   if (!this.skipFakeData && (this.addedFields.length > 0 || this.shouldWriteAnyRelationship)) {
  //     this.fields = this.addedFields;
  //     this.relationships = this.addedRelationships;
  //     promises.push(this.writeFilesToDisk(fakeFiles, this, false, this.sourceRoot()));
  //     promises.push(this.writeFilesToDisk(updateMigrateFiles, this, false, this.sourceRoot()));
  //   }
  //
  //   if (this.hasFieldConstraint || this.shouldWriteAnyRelationship) {
  //     promises.push(this.writeFilesToDisk(updateConstraintsFiles, this, false, this.sourceRoot()));
  //   }
  //   return Promise.all(promises);
  // }
};
