
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Certificate
 * 
 */
export type Certificate = $Result.DefaultSelection<Prisma.$CertificatePayload>
/**
 * Model CertificationTemplate
 * 
 */
export type CertificationTemplate = $Result.DefaultSelection<Prisma.$CertificationTemplatePayload>
/**
 * Model QRCode
 * 
 */
export type QRCode = $Result.DefaultSelection<Prisma.$QRCodePayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ISSUER: 'ISSUER',
  RECIPIENT: 'RECIPIENT'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.CertificateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificationTemplate`: Exposes CRUD operations for the **CertificationTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CertificationTemplates
    * const certificationTemplates = await prisma.certificationTemplate.findMany()
    * ```
    */
  get certificationTemplate(): Prisma.CertificationTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qRCode`: Exposes CRUD operations for the **QRCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QRCodes
    * const qRCodes = await prisma.qRCode.findMany()
    * ```
    */
  get qRCode(): Prisma.QRCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Certificate: 'Certificate',
    CertificationTemplate: 'CertificationTemplate',
    QRCode: 'QRCode',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "certificate" | "certificationTemplate" | "qRCode" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Certificate: {
        payload: Prisma.$CertificatePayload<ExtArgs>
        fields: Prisma.CertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findFirst: {
            args: Prisma.CertificateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findMany: {
            args: Prisma.CertificateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          create: {
            args: Prisma.CertificateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          createMany: {
            args: Prisma.CertificateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CertificateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          update: {
            args: Prisma.CertificateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          deleteMany: {
            args: Prisma.CertificateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CertificateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.CertificateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificateCountArgs<ExtArgs>
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
          }
        }
      }
      CertificationTemplate: {
        payload: Prisma.$CertificationTemplatePayload<ExtArgs>
        fields: Prisma.CertificationTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificationTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificationTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTemplatePayload>
          }
          findFirst: {
            args: Prisma.CertificationTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificationTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTemplatePayload>
          }
          findMany: {
            args: Prisma.CertificationTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTemplatePayload>[]
          }
          create: {
            args: Prisma.CertificationTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTemplatePayload>
          }
          createMany: {
            args: Prisma.CertificationTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CertificationTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTemplatePayload>
          }
          update: {
            args: Prisma.CertificationTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTemplatePayload>
          }
          deleteMany: {
            args: Prisma.CertificationTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificationTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CertificationTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTemplatePayload>
          }
          aggregate: {
            args: Prisma.CertificationTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificationTemplate>
          }
          groupBy: {
            args: Prisma.CertificationTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificationTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificationTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<CertificationTemplateCountAggregateOutputType> | number
          }
        }
      }
      QRCode: {
        payload: Prisma.$QRCodePayload<ExtArgs>
        fields: Prisma.QRCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QRCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QRCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          findFirst: {
            args: Prisma.QRCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QRCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          findMany: {
            args: Prisma.QRCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>[]
          }
          create: {
            args: Prisma.QRCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          createMany: {
            args: Prisma.QRCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QRCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          update: {
            args: Prisma.QRCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          deleteMany: {
            args: Prisma.QRCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QRCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QRCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          aggregate: {
            args: Prisma.QRCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQRCode>
          }
          groupBy: {
            args: Prisma.QRCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<QRCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.QRCodeCountArgs<ExtArgs>
            result: $Utils.Optional<QRCodeCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    certificate?: CertificateOmit
    certificationTemplate?: CertificationTemplateOmit
    qRCode?: QRCodeOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    issuedCertificates: number
    receivedCertificates: number
    templates: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issuedCertificates?: boolean | UserCountOutputTypeCountIssuedCertificatesArgs
    receivedCertificates?: boolean | UserCountOutputTypeCountReceivedCertificatesArgs
    templates?: boolean | UserCountOutputTypeCountTemplatesArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIssuedCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificationTemplateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type CertificationTemplateCountOutputType
   */

  export type CertificationTemplateCountOutputType = {
    certificates: number
  }

  export type CertificationTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificates?: boolean | CertificationTemplateCountOutputTypeCountCertificatesArgs
  }

  // Custom InputTypes
  /**
   * CertificationTemplateCountOutputType without action
   */
  export type CertificationTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTemplateCountOutputType
     */
    select?: CertificationTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CertificationTemplateCountOutputType without action
   */
  export type CertificationTemplateCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issuedCertificates?: boolean | User$issuedCertificatesArgs<ExtArgs>
    receivedCertificates?: boolean | User$receivedCertificatesArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issuedCertificates?: boolean | User$issuedCertificatesArgs<ExtArgs>
    receivedCertificates?: boolean | User$receivedCertificatesArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      issuedCertificates: Prisma.$CertificatePayload<ExtArgs>[]
      receivedCertificates: Prisma.$CertificatePayload<ExtArgs>[]
      templates: Prisma.$CertificationTemplatePayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issuedCertificates<T extends User$issuedCertificatesArgs<ExtArgs> = {}>(args?: Subset<T, User$issuedCertificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedCertificates<T extends User$receivedCertificatesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedCertificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templates<T extends User$templatesArgs<ExtArgs> = {}>(args?: Subset<T, User$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificationTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.issuedCertificates
   */
  export type User$issuedCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * User.receivedCertificates
   */
  export type User$receivedCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * User.templates
   */
  export type User$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTemplate
     */
    select?: CertificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTemplate
     */
    omit?: CertificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTemplateInclude<ExtArgs> | null
    where?: CertificationTemplateWhereInput
    orderBy?: CertificationTemplateOrderByWithRelationInput | CertificationTemplateOrderByWithRelationInput[]
    cursor?: CertificationTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificationTemplateScalarFieldEnum | CertificationTemplateScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateAvgAggregateOutputType = {
    id: number | null
    issuerId: number | null
    recipientId: number | null
    templateId: number | null
  }

  export type CertificateSumAggregateOutputType = {
    id: number | null
    issuerId: number | null
    recipientId: number | null
    templateId: number | null
  }

  export type CertificateMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    issuerId: number | null
    recipientId: number | null
    templateId: number | null
    issuedAt: Date | null
    validUntil: Date | null
    certUrl: string | null
  }

  export type CertificateMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    issuerId: number | null
    recipientId: number | null
    templateId: number | null
    issuedAt: Date | null
    validUntil: Date | null
    certUrl: string | null
  }

  export type CertificateCountAggregateOutputType = {
    id: number
    title: number
    description: number
    issuerId: number
    recipientId: number
    templateId: number
    issuedAt: number
    validUntil: number
    certUrl: number
    _all: number
  }


  export type CertificateAvgAggregateInputType = {
    id?: true
    issuerId?: true
    recipientId?: true
    templateId?: true
  }

  export type CertificateSumAggregateInputType = {
    id?: true
    issuerId?: true
    recipientId?: true
    templateId?: true
  }

  export type CertificateMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    issuerId?: true
    recipientId?: true
    templateId?: true
    issuedAt?: true
    validUntil?: true
    certUrl?: true
  }

  export type CertificateMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    issuerId?: true
    recipientId?: true
    templateId?: true
    issuedAt?: true
    validUntil?: true
    certUrl?: true
  }

  export type CertificateCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    issuerId?: true
    recipientId?: true
    templateId?: true
    issuedAt?: true
    validUntil?: true
    certUrl?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificate to aggregate.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CertificateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CertificateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type CertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithAggregationInput | CertificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: CertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _avg?: CertificateAvgAggregateInputType
    _sum?: CertificateSumAggregateInputType
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    id: number
    title: string
    description: string | null
    issuerId: number
    recipientId: number
    templateId: number
    issuedAt: Date
    validUntil: Date | null
    certUrl: string | null
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type CertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    issuerId?: boolean
    recipientId?: boolean
    templateId?: boolean
    issuedAt?: boolean
    validUntil?: boolean
    certUrl?: boolean
    issuer?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | CertificationTemplateDefaultArgs<ExtArgs>
    qrCode?: boolean | Certificate$qrCodeArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>



  export type CertificateSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    issuerId?: boolean
    recipientId?: boolean
    templateId?: boolean
    issuedAt?: boolean
    validUntil?: boolean
    certUrl?: boolean
  }

  export type CertificateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "issuerId" | "recipientId" | "templateId" | "issuedAt" | "validUntil" | "certUrl", ExtArgs["result"]["certificate"]>
  export type CertificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issuer?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | CertificationTemplateDefaultArgs<ExtArgs>
    qrCode?: boolean | Certificate$qrCodeArgs<ExtArgs>
  }

  export type $CertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificate"
    objects: {
      issuer: Prisma.$UserPayload<ExtArgs>
      recipient: Prisma.$UserPayload<ExtArgs>
      template: Prisma.$CertificationTemplatePayload<ExtArgs>
      qrCode: Prisma.$QRCodePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      issuerId: number
      recipientId: number
      templateId: number
      issuedAt: Date
      validUntil: Date | null
      certUrl: string | null
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }

  type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = $Result.GetResult<Prisma.$CertificatePayload, S>

  type CertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface CertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificate'], meta: { name: 'Certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {CertificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificateFindUniqueArgs>(args: SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificateFindFirstArgs>(args?: SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificateFindManyArgs>(args?: SelectSubset<T, CertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificate.
     * @param {CertificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
     */
    create<T extends CertificateCreateArgs>(args: SelectSubset<T, CertificateCreateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificates.
     * @param {CertificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificateCreateManyArgs>(args?: SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Certificate.
     * @param {CertificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
     */
    delete<T extends CertificateDeleteArgs>(args: SelectSubset<T, CertificateDeleteArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificate.
     * @param {CertificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificateUpdateArgs>(args: SelectSubset<T, CertificateUpdateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificates.
     * @param {CertificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificateDeleteManyArgs>(args?: SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificateUpdateManyArgs>(args: SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Certificate.
     * @param {CertificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
     */
    upsert<T extends CertificateUpsertArgs>(args: SelectSubset<T, CertificateUpsertArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends CertificateCountArgs>(
      args?: Subset<T, CertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificateGroupByArgs['orderBy'] }
        : { orderBy?: CertificateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificate model
   */
  readonly fields: CertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issuer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends CertificationTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CertificationTemplateDefaultArgs<ExtArgs>>): Prisma__CertificationTemplateClient<$Result.GetResult<Prisma.$CertificationTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    qrCode<T extends Certificate$qrCodeArgs<ExtArgs> = {}>(args?: Subset<T, Certificate$qrCodeArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Certificate model
   */
  interface CertificateFieldRefs {
    readonly id: FieldRef<"Certificate", 'Int'>
    readonly title: FieldRef<"Certificate", 'String'>
    readonly description: FieldRef<"Certificate", 'String'>
    readonly issuerId: FieldRef<"Certificate", 'Int'>
    readonly recipientId: FieldRef<"Certificate", 'Int'>
    readonly templateId: FieldRef<"Certificate", 'Int'>
    readonly issuedAt: FieldRef<"Certificate", 'DateTime'>
    readonly validUntil: FieldRef<"Certificate", 'DateTime'>
    readonly certUrl: FieldRef<"Certificate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Certificate findUnique
   */
  export type CertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findUniqueOrThrow
   */
  export type CertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findFirst
   */
  export type CertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findFirstOrThrow
   */
  export type CertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findMany
   */
  export type CertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate create
   */
  export type CertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificate.
     */
    data: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
  }

  /**
   * Certificate createMany
   */
  export type CertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificate update
   */
  export type CertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificate.
     */
    data: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
    /**
     * Choose, which Certificate to update.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate updateMany
   */
  export type CertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
  }

  /**
   * Certificate upsert
   */
  export type CertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificate to update in case it exists.
     */
    where: CertificateWhereUniqueInput
    /**
     * In case the Certificate found by the `where` argument doesn't exist, create a new Certificate with this data.
     */
    create: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
    /**
     * In case the Certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
  }

  /**
   * Certificate delete
   */
  export type CertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter which Certificate to delete.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate deleteMany
   */
  export type CertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to delete.
     */
    limit?: number
  }

  /**
   * Certificate.qrCode
   */
  export type Certificate$qrCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    where?: QRCodeWhereInput
  }

  /**
   * Certificate without action
   */
  export type CertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
  }


  /**
   * Model CertificationTemplate
   */

  export type AggregateCertificationTemplate = {
    _count: CertificationTemplateCountAggregateOutputType | null
    _avg: CertificationTemplateAvgAggregateOutputType | null
    _sum: CertificationTemplateSumAggregateOutputType | null
    _min: CertificationTemplateMinAggregateOutputType | null
    _max: CertificationTemplateMaxAggregateOutputType | null
  }

  export type CertificationTemplateAvgAggregateOutputType = {
    id: number | null
    issuerId: number | null
  }

  export type CertificationTemplateSumAggregateOutputType = {
    id: number | null
    issuerId: number | null
  }

  export type CertificationTemplateMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    issuerId: number | null
    createdAt: Date | null
  }

  export type CertificationTemplateMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    issuerId: number | null
    createdAt: Date | null
  }

  export type CertificationTemplateCountAggregateOutputType = {
    id: number
    title: number
    description: number
    issuerId: number
    createdAt: number
    _all: number
  }


  export type CertificationTemplateAvgAggregateInputType = {
    id?: true
    issuerId?: true
  }

  export type CertificationTemplateSumAggregateInputType = {
    id?: true
    issuerId?: true
  }

  export type CertificationTemplateMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    issuerId?: true
    createdAt?: true
  }

  export type CertificationTemplateMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    issuerId?: true
    createdAt?: true
  }

  export type CertificationTemplateCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    issuerId?: true
    createdAt?: true
    _all?: true
  }

  export type CertificationTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CertificationTemplate to aggregate.
     */
    where?: CertificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CertificationTemplates to fetch.
     */
    orderBy?: CertificationTemplateOrderByWithRelationInput | CertificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CertificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CertificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CertificationTemplates
    **/
    _count?: true | CertificationTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CertificationTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CertificationTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificationTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificationTemplateMaxAggregateInputType
  }

  export type GetCertificationTemplateAggregateType<T extends CertificationTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificationTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificationTemplate[P]>
      : GetScalarType<T[P], AggregateCertificationTemplate[P]>
  }




  export type CertificationTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificationTemplateWhereInput
    orderBy?: CertificationTemplateOrderByWithAggregationInput | CertificationTemplateOrderByWithAggregationInput[]
    by: CertificationTemplateScalarFieldEnum[] | CertificationTemplateScalarFieldEnum
    having?: CertificationTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificationTemplateCountAggregateInputType | true
    _avg?: CertificationTemplateAvgAggregateInputType
    _sum?: CertificationTemplateSumAggregateInputType
    _min?: CertificationTemplateMinAggregateInputType
    _max?: CertificationTemplateMaxAggregateInputType
  }

  export type CertificationTemplateGroupByOutputType = {
    id: number
    title: string
    description: string | null
    issuerId: number
    createdAt: Date
    _count: CertificationTemplateCountAggregateOutputType | null
    _avg: CertificationTemplateAvgAggregateOutputType | null
    _sum: CertificationTemplateSumAggregateOutputType | null
    _min: CertificationTemplateMinAggregateOutputType | null
    _max: CertificationTemplateMaxAggregateOutputType | null
  }

  type GetCertificationTemplateGroupByPayload<T extends CertificationTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificationTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificationTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificationTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificationTemplateGroupByOutputType[P]>
        }
      >
    >


  export type CertificationTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    issuerId?: boolean
    createdAt?: boolean
    issuer?: boolean | UserDefaultArgs<ExtArgs>
    certificates?: boolean | CertificationTemplate$certificatesArgs<ExtArgs>
    _count?: boolean | CertificationTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificationTemplate"]>



  export type CertificationTemplateSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    issuerId?: boolean
    createdAt?: boolean
  }

  export type CertificationTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "issuerId" | "createdAt", ExtArgs["result"]["certificationTemplate"]>
  export type CertificationTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issuer?: boolean | UserDefaultArgs<ExtArgs>
    certificates?: boolean | CertificationTemplate$certificatesArgs<ExtArgs>
    _count?: boolean | CertificationTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CertificationTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CertificationTemplate"
    objects: {
      issuer: Prisma.$UserPayload<ExtArgs>
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      issuerId: number
      createdAt: Date
    }, ExtArgs["result"]["certificationTemplate"]>
    composites: {}
  }

  type CertificationTemplateGetPayload<S extends boolean | null | undefined | CertificationTemplateDefaultArgs> = $Result.GetResult<Prisma.$CertificationTemplatePayload, S>

  type CertificationTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificationTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificationTemplateCountAggregateInputType | true
    }

  export interface CertificationTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CertificationTemplate'], meta: { name: 'CertificationTemplate' } }
    /**
     * Find zero or one CertificationTemplate that matches the filter.
     * @param {CertificationTemplateFindUniqueArgs} args - Arguments to find a CertificationTemplate
     * @example
     * // Get one CertificationTemplate
     * const certificationTemplate = await prisma.certificationTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificationTemplateFindUniqueArgs>(args: SelectSubset<T, CertificationTemplateFindUniqueArgs<ExtArgs>>): Prisma__CertificationTemplateClient<$Result.GetResult<Prisma.$CertificationTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CertificationTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificationTemplateFindUniqueOrThrowArgs} args - Arguments to find a CertificationTemplate
     * @example
     * // Get one CertificationTemplate
     * const certificationTemplate = await prisma.certificationTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificationTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificationTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificationTemplateClient<$Result.GetResult<Prisma.$CertificationTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CertificationTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationTemplateFindFirstArgs} args - Arguments to find a CertificationTemplate
     * @example
     * // Get one CertificationTemplate
     * const certificationTemplate = await prisma.certificationTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificationTemplateFindFirstArgs>(args?: SelectSubset<T, CertificationTemplateFindFirstArgs<ExtArgs>>): Prisma__CertificationTemplateClient<$Result.GetResult<Prisma.$CertificationTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CertificationTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationTemplateFindFirstOrThrowArgs} args - Arguments to find a CertificationTemplate
     * @example
     * // Get one CertificationTemplate
     * const certificationTemplate = await prisma.certificationTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificationTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificationTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificationTemplateClient<$Result.GetResult<Prisma.$CertificationTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CertificationTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CertificationTemplates
     * const certificationTemplates = await prisma.certificationTemplate.findMany()
     * 
     * // Get first 10 CertificationTemplates
     * const certificationTemplates = await prisma.certificationTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificationTemplateWithIdOnly = await prisma.certificationTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificationTemplateFindManyArgs>(args?: SelectSubset<T, CertificationTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificationTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CertificationTemplate.
     * @param {CertificationTemplateCreateArgs} args - Arguments to create a CertificationTemplate.
     * @example
     * // Create one CertificationTemplate
     * const CertificationTemplate = await prisma.certificationTemplate.create({
     *   data: {
     *     // ... data to create a CertificationTemplate
     *   }
     * })
     * 
     */
    create<T extends CertificationTemplateCreateArgs>(args: SelectSubset<T, CertificationTemplateCreateArgs<ExtArgs>>): Prisma__CertificationTemplateClient<$Result.GetResult<Prisma.$CertificationTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CertificationTemplates.
     * @param {CertificationTemplateCreateManyArgs} args - Arguments to create many CertificationTemplates.
     * @example
     * // Create many CertificationTemplates
     * const certificationTemplate = await prisma.certificationTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificationTemplateCreateManyArgs>(args?: SelectSubset<T, CertificationTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CertificationTemplate.
     * @param {CertificationTemplateDeleteArgs} args - Arguments to delete one CertificationTemplate.
     * @example
     * // Delete one CertificationTemplate
     * const CertificationTemplate = await prisma.certificationTemplate.delete({
     *   where: {
     *     // ... filter to delete one CertificationTemplate
     *   }
     * })
     * 
     */
    delete<T extends CertificationTemplateDeleteArgs>(args: SelectSubset<T, CertificationTemplateDeleteArgs<ExtArgs>>): Prisma__CertificationTemplateClient<$Result.GetResult<Prisma.$CertificationTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CertificationTemplate.
     * @param {CertificationTemplateUpdateArgs} args - Arguments to update one CertificationTemplate.
     * @example
     * // Update one CertificationTemplate
     * const certificationTemplate = await prisma.certificationTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificationTemplateUpdateArgs>(args: SelectSubset<T, CertificationTemplateUpdateArgs<ExtArgs>>): Prisma__CertificationTemplateClient<$Result.GetResult<Prisma.$CertificationTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CertificationTemplates.
     * @param {CertificationTemplateDeleteManyArgs} args - Arguments to filter CertificationTemplates to delete.
     * @example
     * // Delete a few CertificationTemplates
     * const { count } = await prisma.certificationTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificationTemplateDeleteManyArgs>(args?: SelectSubset<T, CertificationTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CertificationTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CertificationTemplates
     * const certificationTemplate = await prisma.certificationTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificationTemplateUpdateManyArgs>(args: SelectSubset<T, CertificationTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CertificationTemplate.
     * @param {CertificationTemplateUpsertArgs} args - Arguments to update or create a CertificationTemplate.
     * @example
     * // Update or create a CertificationTemplate
     * const certificationTemplate = await prisma.certificationTemplate.upsert({
     *   create: {
     *     // ... data to create a CertificationTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CertificationTemplate we want to update
     *   }
     * })
     */
    upsert<T extends CertificationTemplateUpsertArgs>(args: SelectSubset<T, CertificationTemplateUpsertArgs<ExtArgs>>): Prisma__CertificationTemplateClient<$Result.GetResult<Prisma.$CertificationTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CertificationTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationTemplateCountArgs} args - Arguments to filter CertificationTemplates to count.
     * @example
     * // Count the number of CertificationTemplates
     * const count = await prisma.certificationTemplate.count({
     *   where: {
     *     // ... the filter for the CertificationTemplates we want to count
     *   }
     * })
    **/
    count<T extends CertificationTemplateCountArgs>(
      args?: Subset<T, CertificationTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificationTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CertificationTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CertificationTemplateAggregateArgs>(args: Subset<T, CertificationTemplateAggregateArgs>): Prisma.PrismaPromise<GetCertificationTemplateAggregateType<T>>

    /**
     * Group by CertificationTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CertificationTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificationTemplateGroupByArgs['orderBy'] }
        : { orderBy?: CertificationTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CertificationTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificationTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CertificationTemplate model
   */
  readonly fields: CertificationTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CertificationTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificationTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issuer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    certificates<T extends CertificationTemplate$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, CertificationTemplate$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CertificationTemplate model
   */
  interface CertificationTemplateFieldRefs {
    readonly id: FieldRef<"CertificationTemplate", 'Int'>
    readonly title: FieldRef<"CertificationTemplate", 'String'>
    readonly description: FieldRef<"CertificationTemplate", 'String'>
    readonly issuerId: FieldRef<"CertificationTemplate", 'Int'>
    readonly createdAt: FieldRef<"CertificationTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CertificationTemplate findUnique
   */
  export type CertificationTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTemplate
     */
    select?: CertificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTemplate
     */
    omit?: CertificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which CertificationTemplate to fetch.
     */
    where: CertificationTemplateWhereUniqueInput
  }

  /**
   * CertificationTemplate findUniqueOrThrow
   */
  export type CertificationTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTemplate
     */
    select?: CertificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTemplate
     */
    omit?: CertificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which CertificationTemplate to fetch.
     */
    where: CertificationTemplateWhereUniqueInput
  }

  /**
   * CertificationTemplate findFirst
   */
  export type CertificationTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTemplate
     */
    select?: CertificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTemplate
     */
    omit?: CertificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which CertificationTemplate to fetch.
     */
    where?: CertificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CertificationTemplates to fetch.
     */
    orderBy?: CertificationTemplateOrderByWithRelationInput | CertificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CertificationTemplates.
     */
    cursor?: CertificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CertificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CertificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CertificationTemplates.
     */
    distinct?: CertificationTemplateScalarFieldEnum | CertificationTemplateScalarFieldEnum[]
  }

  /**
   * CertificationTemplate findFirstOrThrow
   */
  export type CertificationTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTemplate
     */
    select?: CertificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTemplate
     */
    omit?: CertificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which CertificationTemplate to fetch.
     */
    where?: CertificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CertificationTemplates to fetch.
     */
    orderBy?: CertificationTemplateOrderByWithRelationInput | CertificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CertificationTemplates.
     */
    cursor?: CertificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CertificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CertificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CertificationTemplates.
     */
    distinct?: CertificationTemplateScalarFieldEnum | CertificationTemplateScalarFieldEnum[]
  }

  /**
   * CertificationTemplate findMany
   */
  export type CertificationTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTemplate
     */
    select?: CertificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTemplate
     */
    omit?: CertificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which CertificationTemplates to fetch.
     */
    where?: CertificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CertificationTemplates to fetch.
     */
    orderBy?: CertificationTemplateOrderByWithRelationInput | CertificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CertificationTemplates.
     */
    cursor?: CertificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CertificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CertificationTemplates.
     */
    skip?: number
    distinct?: CertificationTemplateScalarFieldEnum | CertificationTemplateScalarFieldEnum[]
  }

  /**
   * CertificationTemplate create
   */
  export type CertificationTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTemplate
     */
    select?: CertificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTemplate
     */
    omit?: CertificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a CertificationTemplate.
     */
    data: XOR<CertificationTemplateCreateInput, CertificationTemplateUncheckedCreateInput>
  }

  /**
   * CertificationTemplate createMany
   */
  export type CertificationTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CertificationTemplates.
     */
    data: CertificationTemplateCreateManyInput | CertificationTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CertificationTemplate update
   */
  export type CertificationTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTemplate
     */
    select?: CertificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTemplate
     */
    omit?: CertificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a CertificationTemplate.
     */
    data: XOR<CertificationTemplateUpdateInput, CertificationTemplateUncheckedUpdateInput>
    /**
     * Choose, which CertificationTemplate to update.
     */
    where: CertificationTemplateWhereUniqueInput
  }

  /**
   * CertificationTemplate updateMany
   */
  export type CertificationTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CertificationTemplates.
     */
    data: XOR<CertificationTemplateUpdateManyMutationInput, CertificationTemplateUncheckedUpdateManyInput>
    /**
     * Filter which CertificationTemplates to update
     */
    where?: CertificationTemplateWhereInput
    /**
     * Limit how many CertificationTemplates to update.
     */
    limit?: number
  }

  /**
   * CertificationTemplate upsert
   */
  export type CertificationTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTemplate
     */
    select?: CertificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTemplate
     */
    omit?: CertificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the CertificationTemplate to update in case it exists.
     */
    where: CertificationTemplateWhereUniqueInput
    /**
     * In case the CertificationTemplate found by the `where` argument doesn't exist, create a new CertificationTemplate with this data.
     */
    create: XOR<CertificationTemplateCreateInput, CertificationTemplateUncheckedCreateInput>
    /**
     * In case the CertificationTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificationTemplateUpdateInput, CertificationTemplateUncheckedUpdateInput>
  }

  /**
   * CertificationTemplate delete
   */
  export type CertificationTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTemplate
     */
    select?: CertificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTemplate
     */
    omit?: CertificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTemplateInclude<ExtArgs> | null
    /**
     * Filter which CertificationTemplate to delete.
     */
    where: CertificationTemplateWhereUniqueInput
  }

  /**
   * CertificationTemplate deleteMany
   */
  export type CertificationTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CertificationTemplates to delete
     */
    where?: CertificationTemplateWhereInput
    /**
     * Limit how many CertificationTemplates to delete.
     */
    limit?: number
  }

  /**
   * CertificationTemplate.certificates
   */
  export type CertificationTemplate$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * CertificationTemplate without action
   */
  export type CertificationTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTemplate
     */
    select?: CertificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTemplate
     */
    omit?: CertificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTemplateInclude<ExtArgs> | null
  }


  /**
   * Model QRCode
   */

  export type AggregateQRCode = {
    _count: QRCodeCountAggregateOutputType | null
    _avg: QRCodeAvgAggregateOutputType | null
    _sum: QRCodeSumAggregateOutputType | null
    _min: QRCodeMinAggregateOutputType | null
    _max: QRCodeMaxAggregateOutputType | null
  }

  export type QRCodeAvgAggregateOutputType = {
    id: number | null
    certificateId: number | null
  }

  export type QRCodeSumAggregateOutputType = {
    id: number | null
    certificateId: number | null
  }

  export type QRCodeMinAggregateOutputType = {
    id: number | null
    certificateId: number | null
    qrData: string | null
  }

  export type QRCodeMaxAggregateOutputType = {
    id: number | null
    certificateId: number | null
    qrData: string | null
  }

  export type QRCodeCountAggregateOutputType = {
    id: number
    certificateId: number
    qrData: number
    _all: number
  }


  export type QRCodeAvgAggregateInputType = {
    id?: true
    certificateId?: true
  }

  export type QRCodeSumAggregateInputType = {
    id?: true
    certificateId?: true
  }

  export type QRCodeMinAggregateInputType = {
    id?: true
    certificateId?: true
    qrData?: true
  }

  export type QRCodeMaxAggregateInputType = {
    id?: true
    certificateId?: true
    qrData?: true
  }

  export type QRCodeCountAggregateInputType = {
    id?: true
    certificateId?: true
    qrData?: true
    _all?: true
  }

  export type QRCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRCode to aggregate.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QRCodes
    **/
    _count?: true | QRCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QRCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QRCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QRCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QRCodeMaxAggregateInputType
  }

  export type GetQRCodeAggregateType<T extends QRCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateQRCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQRCode[P]>
      : GetScalarType<T[P], AggregateQRCode[P]>
  }




  export type QRCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QRCodeWhereInput
    orderBy?: QRCodeOrderByWithAggregationInput | QRCodeOrderByWithAggregationInput[]
    by: QRCodeScalarFieldEnum[] | QRCodeScalarFieldEnum
    having?: QRCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QRCodeCountAggregateInputType | true
    _avg?: QRCodeAvgAggregateInputType
    _sum?: QRCodeSumAggregateInputType
    _min?: QRCodeMinAggregateInputType
    _max?: QRCodeMaxAggregateInputType
  }

  export type QRCodeGroupByOutputType = {
    id: number
    certificateId: number
    qrData: string
    _count: QRCodeCountAggregateOutputType | null
    _avg: QRCodeAvgAggregateOutputType | null
    _sum: QRCodeSumAggregateOutputType | null
    _min: QRCodeMinAggregateOutputType | null
    _max: QRCodeMaxAggregateOutputType | null
  }

  type GetQRCodeGroupByPayload<T extends QRCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QRCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QRCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QRCodeGroupByOutputType[P]>
            : GetScalarType<T[P], QRCodeGroupByOutputType[P]>
        }
      >
    >


  export type QRCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    certificateId?: boolean
    qrData?: boolean
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qRCode"]>



  export type QRCodeSelectScalar = {
    id?: boolean
    certificateId?: boolean
    qrData?: boolean
  }

  export type QRCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "certificateId" | "qrData", ExtArgs["result"]["qRCode"]>
  export type QRCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
  }

  export type $QRCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QRCode"
    objects: {
      certificate: Prisma.$CertificatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      certificateId: number
      qrData: string
    }, ExtArgs["result"]["qRCode"]>
    composites: {}
  }

  type QRCodeGetPayload<S extends boolean | null | undefined | QRCodeDefaultArgs> = $Result.GetResult<Prisma.$QRCodePayload, S>

  type QRCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QRCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QRCodeCountAggregateInputType | true
    }

  export interface QRCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QRCode'], meta: { name: 'QRCode' } }
    /**
     * Find zero or one QRCode that matches the filter.
     * @param {QRCodeFindUniqueArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QRCodeFindUniqueArgs>(args: SelectSubset<T, QRCodeFindUniqueArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QRCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QRCodeFindUniqueOrThrowArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QRCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, QRCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QRCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindFirstArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QRCodeFindFirstArgs>(args?: SelectSubset<T, QRCodeFindFirstArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QRCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindFirstOrThrowArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QRCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, QRCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QRCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QRCodes
     * const qRCodes = await prisma.qRCode.findMany()
     * 
     * // Get first 10 QRCodes
     * const qRCodes = await prisma.qRCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qRCodeWithIdOnly = await prisma.qRCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QRCodeFindManyArgs>(args?: SelectSubset<T, QRCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QRCode.
     * @param {QRCodeCreateArgs} args - Arguments to create a QRCode.
     * @example
     * // Create one QRCode
     * const QRCode = await prisma.qRCode.create({
     *   data: {
     *     // ... data to create a QRCode
     *   }
     * })
     * 
     */
    create<T extends QRCodeCreateArgs>(args: SelectSubset<T, QRCodeCreateArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QRCodes.
     * @param {QRCodeCreateManyArgs} args - Arguments to create many QRCodes.
     * @example
     * // Create many QRCodes
     * const qRCode = await prisma.qRCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QRCodeCreateManyArgs>(args?: SelectSubset<T, QRCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QRCode.
     * @param {QRCodeDeleteArgs} args - Arguments to delete one QRCode.
     * @example
     * // Delete one QRCode
     * const QRCode = await prisma.qRCode.delete({
     *   where: {
     *     // ... filter to delete one QRCode
     *   }
     * })
     * 
     */
    delete<T extends QRCodeDeleteArgs>(args: SelectSubset<T, QRCodeDeleteArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QRCode.
     * @param {QRCodeUpdateArgs} args - Arguments to update one QRCode.
     * @example
     * // Update one QRCode
     * const qRCode = await prisma.qRCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QRCodeUpdateArgs>(args: SelectSubset<T, QRCodeUpdateArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QRCodes.
     * @param {QRCodeDeleteManyArgs} args - Arguments to filter QRCodes to delete.
     * @example
     * // Delete a few QRCodes
     * const { count } = await prisma.qRCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QRCodeDeleteManyArgs>(args?: SelectSubset<T, QRCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QRCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QRCodes
     * const qRCode = await prisma.qRCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QRCodeUpdateManyArgs>(args: SelectSubset<T, QRCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QRCode.
     * @param {QRCodeUpsertArgs} args - Arguments to update or create a QRCode.
     * @example
     * // Update or create a QRCode
     * const qRCode = await prisma.qRCode.upsert({
     *   create: {
     *     // ... data to create a QRCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QRCode we want to update
     *   }
     * })
     */
    upsert<T extends QRCodeUpsertArgs>(args: SelectSubset<T, QRCodeUpsertArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QRCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeCountArgs} args - Arguments to filter QRCodes to count.
     * @example
     * // Count the number of QRCodes
     * const count = await prisma.qRCode.count({
     *   where: {
     *     // ... the filter for the QRCodes we want to count
     *   }
     * })
    **/
    count<T extends QRCodeCountArgs>(
      args?: Subset<T, QRCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QRCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QRCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QRCodeAggregateArgs>(args: Subset<T, QRCodeAggregateArgs>): Prisma.PrismaPromise<GetQRCodeAggregateType<T>>

    /**
     * Group by QRCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QRCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QRCodeGroupByArgs['orderBy'] }
        : { orderBy?: QRCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QRCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQRCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QRCode model
   */
  readonly fields: QRCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QRCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QRCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    certificate<T extends CertificateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CertificateDefaultArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QRCode model
   */
  interface QRCodeFieldRefs {
    readonly id: FieldRef<"QRCode", 'Int'>
    readonly certificateId: FieldRef<"QRCode", 'Int'>
    readonly qrData: FieldRef<"QRCode", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QRCode findUnique
   */
  export type QRCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode findUniqueOrThrow
   */
  export type QRCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode findFirst
   */
  export type QRCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRCodes.
     */
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * QRCode findFirstOrThrow
   */
  export type QRCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRCodes.
     */
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * QRCode findMany
   */
  export type QRCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCodes to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * QRCode create
   */
  export type QRCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a QRCode.
     */
    data: XOR<QRCodeCreateInput, QRCodeUncheckedCreateInput>
  }

  /**
   * QRCode createMany
   */
  export type QRCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QRCodes.
     */
    data: QRCodeCreateManyInput | QRCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QRCode update
   */
  export type QRCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a QRCode.
     */
    data: XOR<QRCodeUpdateInput, QRCodeUncheckedUpdateInput>
    /**
     * Choose, which QRCode to update.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode updateMany
   */
  export type QRCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QRCodes.
     */
    data: XOR<QRCodeUpdateManyMutationInput, QRCodeUncheckedUpdateManyInput>
    /**
     * Filter which QRCodes to update
     */
    where?: QRCodeWhereInput
    /**
     * Limit how many QRCodes to update.
     */
    limit?: number
  }

  /**
   * QRCode upsert
   */
  export type QRCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the QRCode to update in case it exists.
     */
    where: QRCodeWhereUniqueInput
    /**
     * In case the QRCode found by the `where` argument doesn't exist, create a new QRCode with this data.
     */
    create: XOR<QRCodeCreateInput, QRCodeUncheckedCreateInput>
    /**
     * In case the QRCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QRCodeUpdateInput, QRCodeUncheckedUpdateInput>
  }

  /**
   * QRCode delete
   */
  export type QRCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter which QRCode to delete.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode deleteMany
   */
  export type QRCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRCodes to delete
     */
    where?: QRCodeWhereInput
    /**
     * Limit how many QRCodes to delete.
     */
    limit?: number
  }

  /**
   * QRCode without action
   */
  export type QRCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AuditLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: number | null
    action: string | null
    userId: number | null
    timestamp: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: number | null
    action: string | null
    userId: number | null
    timestamp: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    userId: number
    timestamp: number
    _all: number
  }


  export type AuditLogAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AuditLogSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    userId?: true
    timestamp?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    userId?: true
    timestamp?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    userId?: true
    timestamp?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _avg?: AuditLogAvgAggregateInputType
    _sum?: AuditLogSumAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: number
    action: string
    userId: number
    timestamp: Date
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    userId?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>



  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    userId?: boolean
    timestamp?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "userId" | "timestamp", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: string
      userId: number
      timestamp: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'Int'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'Int'>
    readonly timestamp: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CertificateScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    issuerId: 'issuerId',
    recipientId: 'recipientId',
    templateId: 'templateId',
    issuedAt: 'issuedAt',
    validUntil: 'validUntil',
    certUrl: 'certUrl'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const CertificationTemplateScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    issuerId: 'issuerId',
    createdAt: 'createdAt'
  };

  export type CertificationTemplateScalarFieldEnum = (typeof CertificationTemplateScalarFieldEnum)[keyof typeof CertificationTemplateScalarFieldEnum]


  export const QRCodeScalarFieldEnum: {
    id: 'id',
    certificateId: 'certificateId',
    qrData: 'qrData'
  };

  export type QRCodeScalarFieldEnum = (typeof QRCodeScalarFieldEnum)[keyof typeof QRCodeScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    userId: 'userId',
    timestamp: 'timestamp'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CertificateOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    certUrl: 'certUrl'
  };

  export type CertificateOrderByRelevanceFieldEnum = (typeof CertificateOrderByRelevanceFieldEnum)[keyof typeof CertificateOrderByRelevanceFieldEnum]


  export const CertificationTemplateOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type CertificationTemplateOrderByRelevanceFieldEnum = (typeof CertificationTemplateOrderByRelevanceFieldEnum)[keyof typeof CertificationTemplateOrderByRelevanceFieldEnum]


  export const QRCodeOrderByRelevanceFieldEnum: {
    qrData: 'qrData'
  };

  export type QRCodeOrderByRelevanceFieldEnum = (typeof QRCodeOrderByRelevanceFieldEnum)[keyof typeof QRCodeOrderByRelevanceFieldEnum]


  export const AuditLogOrderByRelevanceFieldEnum: {
    action: 'action'
  };

  export type AuditLogOrderByRelevanceFieldEnum = (typeof AuditLogOrderByRelevanceFieldEnum)[keyof typeof AuditLogOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    issuedCertificates?: CertificateListRelationFilter
    receivedCertificates?: CertificateListRelationFilter
    templates?: CertificationTemplateListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issuedCertificates?: CertificateOrderByRelationAggregateInput
    receivedCertificates?: CertificateOrderByRelationAggregateInput
    templates?: CertificationTemplateOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    issuedCertificates?: CertificateListRelationFilter
    receivedCertificates?: CertificateListRelationFilter
    templates?: CertificationTemplateListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CertificateWhereInput = {
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    id?: IntFilter<"Certificate"> | number
    title?: StringFilter<"Certificate"> | string
    description?: StringNullableFilter<"Certificate"> | string | null
    issuerId?: IntFilter<"Certificate"> | number
    recipientId?: IntFilter<"Certificate"> | number
    templateId?: IntFilter<"Certificate"> | number
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
    validUntil?: DateTimeNullableFilter<"Certificate"> | Date | string | null
    certUrl?: StringNullableFilter<"Certificate"> | string | null
    issuer?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
    template?: XOR<CertificationTemplateScalarRelationFilter, CertificationTemplateWhereInput>
    qrCode?: XOR<QRCodeNullableScalarRelationFilter, QRCodeWhereInput> | null
  }

  export type CertificateOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    issuerId?: SortOrder
    recipientId?: SortOrder
    templateId?: SortOrder
    issuedAt?: SortOrder
    validUntil?: SortOrderInput | SortOrder
    certUrl?: SortOrderInput | SortOrder
    issuer?: UserOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
    template?: CertificationTemplateOrderByWithRelationInput
    qrCode?: QRCodeOrderByWithRelationInput
    _relevance?: CertificateOrderByRelevanceInput
  }

  export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    title?: StringFilter<"Certificate"> | string
    description?: StringNullableFilter<"Certificate"> | string | null
    issuerId?: IntFilter<"Certificate"> | number
    recipientId?: IntFilter<"Certificate"> | number
    templateId?: IntFilter<"Certificate"> | number
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
    validUntil?: DateTimeNullableFilter<"Certificate"> | Date | string | null
    certUrl?: StringNullableFilter<"Certificate"> | string | null
    issuer?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
    template?: XOR<CertificationTemplateScalarRelationFilter, CertificationTemplateWhereInput>
    qrCode?: XOR<QRCodeNullableScalarRelationFilter, QRCodeWhereInput> | null
  }, "id">

  export type CertificateOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    issuerId?: SortOrder
    recipientId?: SortOrder
    templateId?: SortOrder
    issuedAt?: SortOrder
    validUntil?: SortOrderInput | SortOrder
    certUrl?: SortOrderInput | SortOrder
    _count?: CertificateCountOrderByAggregateInput
    _avg?: CertificateAvgOrderByAggregateInput
    _max?: CertificateMaxOrderByAggregateInput
    _min?: CertificateMinOrderByAggregateInput
    _sum?: CertificateSumOrderByAggregateInput
  }

  export type CertificateScalarWhereWithAggregatesInput = {
    AND?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    OR?: CertificateScalarWhereWithAggregatesInput[]
    NOT?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Certificate"> | number
    title?: StringWithAggregatesFilter<"Certificate"> | string
    description?: StringNullableWithAggregatesFilter<"Certificate"> | string | null
    issuerId?: IntWithAggregatesFilter<"Certificate"> | number
    recipientId?: IntWithAggregatesFilter<"Certificate"> | number
    templateId?: IntWithAggregatesFilter<"Certificate"> | number
    issuedAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    validUntil?: DateTimeNullableWithAggregatesFilter<"Certificate"> | Date | string | null
    certUrl?: StringNullableWithAggregatesFilter<"Certificate"> | string | null
  }

  export type CertificationTemplateWhereInput = {
    AND?: CertificationTemplateWhereInput | CertificationTemplateWhereInput[]
    OR?: CertificationTemplateWhereInput[]
    NOT?: CertificationTemplateWhereInput | CertificationTemplateWhereInput[]
    id?: IntFilter<"CertificationTemplate"> | number
    title?: StringFilter<"CertificationTemplate"> | string
    description?: StringNullableFilter<"CertificationTemplate"> | string | null
    issuerId?: IntFilter<"CertificationTemplate"> | number
    createdAt?: DateTimeFilter<"CertificationTemplate"> | Date | string
    issuer?: XOR<UserScalarRelationFilter, UserWhereInput>
    certificates?: CertificateListRelationFilter
  }

  export type CertificationTemplateOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    issuerId?: SortOrder
    createdAt?: SortOrder
    issuer?: UserOrderByWithRelationInput
    certificates?: CertificateOrderByRelationAggregateInput
    _relevance?: CertificationTemplateOrderByRelevanceInput
  }

  export type CertificationTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CertificationTemplateWhereInput | CertificationTemplateWhereInput[]
    OR?: CertificationTemplateWhereInput[]
    NOT?: CertificationTemplateWhereInput | CertificationTemplateWhereInput[]
    title?: StringFilter<"CertificationTemplate"> | string
    description?: StringNullableFilter<"CertificationTemplate"> | string | null
    issuerId?: IntFilter<"CertificationTemplate"> | number
    createdAt?: DateTimeFilter<"CertificationTemplate"> | Date | string
    issuer?: XOR<UserScalarRelationFilter, UserWhereInput>
    certificates?: CertificateListRelationFilter
  }, "id">

  export type CertificationTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    issuerId?: SortOrder
    createdAt?: SortOrder
    _count?: CertificationTemplateCountOrderByAggregateInput
    _avg?: CertificationTemplateAvgOrderByAggregateInput
    _max?: CertificationTemplateMaxOrderByAggregateInput
    _min?: CertificationTemplateMinOrderByAggregateInput
    _sum?: CertificationTemplateSumOrderByAggregateInput
  }

  export type CertificationTemplateScalarWhereWithAggregatesInput = {
    AND?: CertificationTemplateScalarWhereWithAggregatesInput | CertificationTemplateScalarWhereWithAggregatesInput[]
    OR?: CertificationTemplateScalarWhereWithAggregatesInput[]
    NOT?: CertificationTemplateScalarWhereWithAggregatesInput | CertificationTemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CertificationTemplate"> | number
    title?: StringWithAggregatesFilter<"CertificationTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"CertificationTemplate"> | string | null
    issuerId?: IntWithAggregatesFilter<"CertificationTemplate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CertificationTemplate"> | Date | string
  }

  export type QRCodeWhereInput = {
    AND?: QRCodeWhereInput | QRCodeWhereInput[]
    OR?: QRCodeWhereInput[]
    NOT?: QRCodeWhereInput | QRCodeWhereInput[]
    id?: IntFilter<"QRCode"> | number
    certificateId?: IntFilter<"QRCode"> | number
    qrData?: StringFilter<"QRCode"> | string
    certificate?: XOR<CertificateScalarRelationFilter, CertificateWhereInput>
  }

  export type QRCodeOrderByWithRelationInput = {
    id?: SortOrder
    certificateId?: SortOrder
    qrData?: SortOrder
    certificate?: CertificateOrderByWithRelationInput
    _relevance?: QRCodeOrderByRelevanceInput
  }

  export type QRCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    certificateId?: number
    AND?: QRCodeWhereInput | QRCodeWhereInput[]
    OR?: QRCodeWhereInput[]
    NOT?: QRCodeWhereInput | QRCodeWhereInput[]
    qrData?: StringFilter<"QRCode"> | string
    certificate?: XOR<CertificateScalarRelationFilter, CertificateWhereInput>
  }, "id" | "certificateId">

  export type QRCodeOrderByWithAggregationInput = {
    id?: SortOrder
    certificateId?: SortOrder
    qrData?: SortOrder
    _count?: QRCodeCountOrderByAggregateInput
    _avg?: QRCodeAvgOrderByAggregateInput
    _max?: QRCodeMaxOrderByAggregateInput
    _min?: QRCodeMinOrderByAggregateInput
    _sum?: QRCodeSumOrderByAggregateInput
  }

  export type QRCodeScalarWhereWithAggregatesInput = {
    AND?: QRCodeScalarWhereWithAggregatesInput | QRCodeScalarWhereWithAggregatesInput[]
    OR?: QRCodeScalarWhereWithAggregatesInput[]
    NOT?: QRCodeScalarWhereWithAggregatesInput | QRCodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QRCode"> | number
    certificateId?: IntWithAggregatesFilter<"QRCode"> | number
    qrData?: StringWithAggregatesFilter<"QRCode"> | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    action?: StringFilter<"AuditLog"> | string
    userId?: IntFilter<"AuditLog"> | number
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AuditLogOrderByRelevanceInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    userId?: IntFilter<"AuditLog"> | number
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _avg?: AuditLogAvgOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
    _sum?: AuditLogSumOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditLog"> | number
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: IntWithAggregatesFilter<"AuditLog"> | number
    timestamp?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedCertificates?: CertificateCreateNestedManyWithoutIssuerInput
    receivedCertificates?: CertificateCreateNestedManyWithoutRecipientInput
    templates?: CertificationTemplateCreateNestedManyWithoutIssuerInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedCertificates?: CertificateUncheckedCreateNestedManyWithoutIssuerInput
    receivedCertificates?: CertificateUncheckedCreateNestedManyWithoutRecipientInput
    templates?: CertificationTemplateUncheckedCreateNestedManyWithoutIssuerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedCertificates?: CertificateUpdateManyWithoutIssuerNestedInput
    receivedCertificates?: CertificateUpdateManyWithoutRecipientNestedInput
    templates?: CertificationTemplateUpdateManyWithoutIssuerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedCertificates?: CertificateUncheckedUpdateManyWithoutIssuerNestedInput
    receivedCertificates?: CertificateUncheckedUpdateManyWithoutRecipientNestedInput
    templates?: CertificationTemplateUncheckedUpdateManyWithoutIssuerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateInput = {
    title: string
    description?: string | null
    issuedAt?: Date | string
    validUntil?: Date | string | null
    certUrl?: string | null
    issuer: UserCreateNestedOneWithoutIssuedCertificatesInput
    recipient: UserCreateNestedOneWithoutReceivedCertificatesInput
    template: CertificationTemplateCreateNestedOneWithoutCertificatesInput
    qrCode?: QRCodeCreateNestedOneWithoutCertificateInput
  }

  export type CertificateUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    issuerId: number
    recipientId: number
    templateId: number
    issuedAt?: Date | string
    validUntil?: Date | string | null
    certUrl?: string | null
    qrCode?: QRCodeUncheckedCreateNestedOneWithoutCertificateInput
  }

  export type CertificateUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: UserUpdateOneRequiredWithoutIssuedCertificatesNestedInput
    recipient?: UserUpdateOneRequiredWithoutReceivedCertificatesNestedInput
    template?: CertificationTemplateUpdateOneRequiredWithoutCertificatesNestedInput
    qrCode?: QRCodeUpdateOneWithoutCertificateNestedInput
  }

  export type CertificateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuerId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: QRCodeUncheckedUpdateOneWithoutCertificateNestedInput
  }

  export type CertificateCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    issuerId: number
    recipientId: number
    templateId: number
    issuedAt?: Date | string
    validUntil?: Date | string | null
    certUrl?: string | null
  }

  export type CertificateUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CertificateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuerId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CertificationTemplateCreateInput = {
    title: string
    description?: string | null
    createdAt?: Date | string
    issuer: UserCreateNestedOneWithoutTemplatesInput
    certificates?: CertificateCreateNestedManyWithoutTemplateInput
  }

  export type CertificationTemplateUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    issuerId: number
    createdAt?: Date | string
    certificates?: CertificateUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type CertificationTemplateUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuer?: UserUpdateOneRequiredWithoutTemplatesNestedInput
    certificates?: CertificateUpdateManyWithoutTemplateNestedInput
  }

  export type CertificationTemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type CertificationTemplateCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    issuerId: number
    createdAt?: Date | string
  }

  export type CertificationTemplateUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificationTemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRCodeCreateInput = {
    qrData: string
    certificate: CertificateCreateNestedOneWithoutQrCodeInput
  }

  export type QRCodeUncheckedCreateInput = {
    id?: number
    certificateId: number
    qrData: string
  }

  export type QRCodeUpdateInput = {
    qrData?: StringFieldUpdateOperationsInput | string
    certificate?: CertificateUpdateOneRequiredWithoutQrCodeNestedInput
  }

  export type QRCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    certificateId?: IntFieldUpdateOperationsInput | number
    qrData?: StringFieldUpdateOperationsInput | string
  }

  export type QRCodeCreateManyInput = {
    id?: number
    certificateId: number
    qrData: string
  }

  export type QRCodeUpdateManyMutationInput = {
    qrData?: StringFieldUpdateOperationsInput | string
  }

  export type QRCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    certificateId?: IntFieldUpdateOperationsInput | number
    qrData?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogCreateInput = {
    action: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: number
    action: string
    userId: number
    timestamp?: Date | string
  }

  export type AuditLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: number
    action: string
    userId: number
    timestamp?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CertificateListRelationFilter = {
    every?: CertificateWhereInput
    some?: CertificateWhereInput
    none?: CertificateWhereInput
  }

  export type CertificationTemplateListRelationFilter = {
    every?: CertificationTemplateWhereInput
    some?: CertificationTemplateWhereInput
    none?: CertificationTemplateWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type CertificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificationTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CertificationTemplateScalarRelationFilter = {
    is?: CertificationTemplateWhereInput
    isNot?: CertificationTemplateWhereInput
  }

  export type QRCodeNullableScalarRelationFilter = {
    is?: QRCodeWhereInput | null
    isNot?: QRCodeWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CertificateOrderByRelevanceInput = {
    fields: CertificateOrderByRelevanceFieldEnum | CertificateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CertificateCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    issuerId?: SortOrder
    recipientId?: SortOrder
    templateId?: SortOrder
    issuedAt?: SortOrder
    validUntil?: SortOrder
    certUrl?: SortOrder
  }

  export type CertificateAvgOrderByAggregateInput = {
    id?: SortOrder
    issuerId?: SortOrder
    recipientId?: SortOrder
    templateId?: SortOrder
  }

  export type CertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    issuerId?: SortOrder
    recipientId?: SortOrder
    templateId?: SortOrder
    issuedAt?: SortOrder
    validUntil?: SortOrder
    certUrl?: SortOrder
  }

  export type CertificateMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    issuerId?: SortOrder
    recipientId?: SortOrder
    templateId?: SortOrder
    issuedAt?: SortOrder
    validUntil?: SortOrder
    certUrl?: SortOrder
  }

  export type CertificateSumOrderByAggregateInput = {
    id?: SortOrder
    issuerId?: SortOrder
    recipientId?: SortOrder
    templateId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CertificationTemplateOrderByRelevanceInput = {
    fields: CertificationTemplateOrderByRelevanceFieldEnum | CertificationTemplateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CertificationTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    issuerId?: SortOrder
    createdAt?: SortOrder
  }

  export type CertificationTemplateAvgOrderByAggregateInput = {
    id?: SortOrder
    issuerId?: SortOrder
  }

  export type CertificationTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    issuerId?: SortOrder
    createdAt?: SortOrder
  }

  export type CertificationTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    issuerId?: SortOrder
    createdAt?: SortOrder
  }

  export type CertificationTemplateSumOrderByAggregateInput = {
    id?: SortOrder
    issuerId?: SortOrder
  }

  export type CertificateScalarRelationFilter = {
    is?: CertificateWhereInput
    isNot?: CertificateWhereInput
  }

  export type QRCodeOrderByRelevanceInput = {
    fields: QRCodeOrderByRelevanceFieldEnum | QRCodeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QRCodeCountOrderByAggregateInput = {
    id?: SortOrder
    certificateId?: SortOrder
    qrData?: SortOrder
  }

  export type QRCodeAvgOrderByAggregateInput = {
    id?: SortOrder
    certificateId?: SortOrder
  }

  export type QRCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    certificateId?: SortOrder
    qrData?: SortOrder
  }

  export type QRCodeMinOrderByAggregateInput = {
    id?: SortOrder
    certificateId?: SortOrder
    qrData?: SortOrder
  }

  export type QRCodeSumOrderByAggregateInput = {
    id?: SortOrder
    certificateId?: SortOrder
  }

  export type AuditLogOrderByRelevanceInput = {
    fields: AuditLogOrderByRelevanceFieldEnum | AuditLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CertificateCreateNestedManyWithoutIssuerInput = {
    create?: XOR<CertificateCreateWithoutIssuerInput, CertificateUncheckedCreateWithoutIssuerInput> | CertificateCreateWithoutIssuerInput[] | CertificateUncheckedCreateWithoutIssuerInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutIssuerInput | CertificateCreateOrConnectWithoutIssuerInput[]
    createMany?: CertificateCreateManyIssuerInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutRecipientInput = {
    create?: XOR<CertificateCreateWithoutRecipientInput, CertificateUncheckedCreateWithoutRecipientInput> | CertificateCreateWithoutRecipientInput[] | CertificateUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutRecipientInput | CertificateCreateOrConnectWithoutRecipientInput[]
    createMany?: CertificateCreateManyRecipientInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type CertificationTemplateCreateNestedManyWithoutIssuerInput = {
    create?: XOR<CertificationTemplateCreateWithoutIssuerInput, CertificationTemplateUncheckedCreateWithoutIssuerInput> | CertificationTemplateCreateWithoutIssuerInput[] | CertificationTemplateUncheckedCreateWithoutIssuerInput[]
    connectOrCreate?: CertificationTemplateCreateOrConnectWithoutIssuerInput | CertificationTemplateCreateOrConnectWithoutIssuerInput[]
    createMany?: CertificationTemplateCreateManyIssuerInputEnvelope
    connect?: CertificationTemplateWhereUniqueInput | CertificationTemplateWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutIssuerInput = {
    create?: XOR<CertificateCreateWithoutIssuerInput, CertificateUncheckedCreateWithoutIssuerInput> | CertificateCreateWithoutIssuerInput[] | CertificateUncheckedCreateWithoutIssuerInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutIssuerInput | CertificateCreateOrConnectWithoutIssuerInput[]
    createMany?: CertificateCreateManyIssuerInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<CertificateCreateWithoutRecipientInput, CertificateUncheckedCreateWithoutRecipientInput> | CertificateCreateWithoutRecipientInput[] | CertificateUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutRecipientInput | CertificateCreateOrConnectWithoutRecipientInput[]
    createMany?: CertificateCreateManyRecipientInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type CertificationTemplateUncheckedCreateNestedManyWithoutIssuerInput = {
    create?: XOR<CertificationTemplateCreateWithoutIssuerInput, CertificationTemplateUncheckedCreateWithoutIssuerInput> | CertificationTemplateCreateWithoutIssuerInput[] | CertificationTemplateUncheckedCreateWithoutIssuerInput[]
    connectOrCreate?: CertificationTemplateCreateOrConnectWithoutIssuerInput | CertificationTemplateCreateOrConnectWithoutIssuerInput[]
    createMany?: CertificationTemplateCreateManyIssuerInputEnvelope
    connect?: CertificationTemplateWhereUniqueInput | CertificationTemplateWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CertificateUpdateManyWithoutIssuerNestedInput = {
    create?: XOR<CertificateCreateWithoutIssuerInput, CertificateUncheckedCreateWithoutIssuerInput> | CertificateCreateWithoutIssuerInput[] | CertificateUncheckedCreateWithoutIssuerInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutIssuerInput | CertificateCreateOrConnectWithoutIssuerInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutIssuerInput | CertificateUpsertWithWhereUniqueWithoutIssuerInput[]
    createMany?: CertificateCreateManyIssuerInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutIssuerInput | CertificateUpdateWithWhereUniqueWithoutIssuerInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutIssuerInput | CertificateUpdateManyWithWhereWithoutIssuerInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<CertificateCreateWithoutRecipientInput, CertificateUncheckedCreateWithoutRecipientInput> | CertificateCreateWithoutRecipientInput[] | CertificateUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutRecipientInput | CertificateCreateOrConnectWithoutRecipientInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutRecipientInput | CertificateUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: CertificateCreateManyRecipientInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutRecipientInput | CertificateUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutRecipientInput | CertificateUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type CertificationTemplateUpdateManyWithoutIssuerNestedInput = {
    create?: XOR<CertificationTemplateCreateWithoutIssuerInput, CertificationTemplateUncheckedCreateWithoutIssuerInput> | CertificationTemplateCreateWithoutIssuerInput[] | CertificationTemplateUncheckedCreateWithoutIssuerInput[]
    connectOrCreate?: CertificationTemplateCreateOrConnectWithoutIssuerInput | CertificationTemplateCreateOrConnectWithoutIssuerInput[]
    upsert?: CertificationTemplateUpsertWithWhereUniqueWithoutIssuerInput | CertificationTemplateUpsertWithWhereUniqueWithoutIssuerInput[]
    createMany?: CertificationTemplateCreateManyIssuerInputEnvelope
    set?: CertificationTemplateWhereUniqueInput | CertificationTemplateWhereUniqueInput[]
    disconnect?: CertificationTemplateWhereUniqueInput | CertificationTemplateWhereUniqueInput[]
    delete?: CertificationTemplateWhereUniqueInput | CertificationTemplateWhereUniqueInput[]
    connect?: CertificationTemplateWhereUniqueInput | CertificationTemplateWhereUniqueInput[]
    update?: CertificationTemplateUpdateWithWhereUniqueWithoutIssuerInput | CertificationTemplateUpdateWithWhereUniqueWithoutIssuerInput[]
    updateMany?: CertificationTemplateUpdateManyWithWhereWithoutIssuerInput | CertificationTemplateUpdateManyWithWhereWithoutIssuerInput[]
    deleteMany?: CertificationTemplateScalarWhereInput | CertificationTemplateScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CertificateUncheckedUpdateManyWithoutIssuerNestedInput = {
    create?: XOR<CertificateCreateWithoutIssuerInput, CertificateUncheckedCreateWithoutIssuerInput> | CertificateCreateWithoutIssuerInput[] | CertificateUncheckedCreateWithoutIssuerInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutIssuerInput | CertificateCreateOrConnectWithoutIssuerInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutIssuerInput | CertificateUpsertWithWhereUniqueWithoutIssuerInput[]
    createMany?: CertificateCreateManyIssuerInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutIssuerInput | CertificateUpdateWithWhereUniqueWithoutIssuerInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutIssuerInput | CertificateUpdateManyWithWhereWithoutIssuerInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<CertificateCreateWithoutRecipientInput, CertificateUncheckedCreateWithoutRecipientInput> | CertificateCreateWithoutRecipientInput[] | CertificateUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutRecipientInput | CertificateCreateOrConnectWithoutRecipientInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutRecipientInput | CertificateUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: CertificateCreateManyRecipientInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutRecipientInput | CertificateUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutRecipientInput | CertificateUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type CertificationTemplateUncheckedUpdateManyWithoutIssuerNestedInput = {
    create?: XOR<CertificationTemplateCreateWithoutIssuerInput, CertificationTemplateUncheckedCreateWithoutIssuerInput> | CertificationTemplateCreateWithoutIssuerInput[] | CertificationTemplateUncheckedCreateWithoutIssuerInput[]
    connectOrCreate?: CertificationTemplateCreateOrConnectWithoutIssuerInput | CertificationTemplateCreateOrConnectWithoutIssuerInput[]
    upsert?: CertificationTemplateUpsertWithWhereUniqueWithoutIssuerInput | CertificationTemplateUpsertWithWhereUniqueWithoutIssuerInput[]
    createMany?: CertificationTemplateCreateManyIssuerInputEnvelope
    set?: CertificationTemplateWhereUniqueInput | CertificationTemplateWhereUniqueInput[]
    disconnect?: CertificationTemplateWhereUniqueInput | CertificationTemplateWhereUniqueInput[]
    delete?: CertificationTemplateWhereUniqueInput | CertificationTemplateWhereUniqueInput[]
    connect?: CertificationTemplateWhereUniqueInput | CertificationTemplateWhereUniqueInput[]
    update?: CertificationTemplateUpdateWithWhereUniqueWithoutIssuerInput | CertificationTemplateUpdateWithWhereUniqueWithoutIssuerInput[]
    updateMany?: CertificationTemplateUpdateManyWithWhereWithoutIssuerInput | CertificationTemplateUpdateManyWithWhereWithoutIssuerInput[]
    deleteMany?: CertificationTemplateScalarWhereInput | CertificationTemplateScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutIssuedCertificatesInput = {
    create?: XOR<UserCreateWithoutIssuedCertificatesInput, UserUncheckedCreateWithoutIssuedCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIssuedCertificatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedCertificatesInput = {
    create?: XOR<UserCreateWithoutReceivedCertificatesInput, UserUncheckedCreateWithoutReceivedCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedCertificatesInput
    connect?: UserWhereUniqueInput
  }

  export type CertificationTemplateCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<CertificationTemplateCreateWithoutCertificatesInput, CertificationTemplateUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: CertificationTemplateCreateOrConnectWithoutCertificatesInput
    connect?: CertificationTemplateWhereUniqueInput
  }

  export type QRCodeCreateNestedOneWithoutCertificateInput = {
    create?: XOR<QRCodeCreateWithoutCertificateInput, QRCodeUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutCertificateInput
    connect?: QRCodeWhereUniqueInput
  }

  export type QRCodeUncheckedCreateNestedOneWithoutCertificateInput = {
    create?: XOR<QRCodeCreateWithoutCertificateInput, QRCodeUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutCertificateInput
    connect?: QRCodeWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutIssuedCertificatesNestedInput = {
    create?: XOR<UserCreateWithoutIssuedCertificatesInput, UserUncheckedCreateWithoutIssuedCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIssuedCertificatesInput
    upsert?: UserUpsertWithoutIssuedCertificatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIssuedCertificatesInput, UserUpdateWithoutIssuedCertificatesInput>, UserUncheckedUpdateWithoutIssuedCertificatesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedCertificatesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedCertificatesInput, UserUncheckedCreateWithoutReceivedCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedCertificatesInput
    upsert?: UserUpsertWithoutReceivedCertificatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedCertificatesInput, UserUpdateWithoutReceivedCertificatesInput>, UserUncheckedUpdateWithoutReceivedCertificatesInput>
  }

  export type CertificationTemplateUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<CertificationTemplateCreateWithoutCertificatesInput, CertificationTemplateUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: CertificationTemplateCreateOrConnectWithoutCertificatesInput
    upsert?: CertificationTemplateUpsertWithoutCertificatesInput
    connect?: CertificationTemplateWhereUniqueInput
    update?: XOR<XOR<CertificationTemplateUpdateToOneWithWhereWithoutCertificatesInput, CertificationTemplateUpdateWithoutCertificatesInput>, CertificationTemplateUncheckedUpdateWithoutCertificatesInput>
  }

  export type QRCodeUpdateOneWithoutCertificateNestedInput = {
    create?: XOR<QRCodeCreateWithoutCertificateInput, QRCodeUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutCertificateInput
    upsert?: QRCodeUpsertWithoutCertificateInput
    disconnect?: QRCodeWhereInput | boolean
    delete?: QRCodeWhereInput | boolean
    connect?: QRCodeWhereUniqueInput
    update?: XOR<XOR<QRCodeUpdateToOneWithWhereWithoutCertificateInput, QRCodeUpdateWithoutCertificateInput>, QRCodeUncheckedUpdateWithoutCertificateInput>
  }

  export type QRCodeUncheckedUpdateOneWithoutCertificateNestedInput = {
    create?: XOR<QRCodeCreateWithoutCertificateInput, QRCodeUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutCertificateInput
    upsert?: QRCodeUpsertWithoutCertificateInput
    disconnect?: QRCodeWhereInput | boolean
    delete?: QRCodeWhereInput | boolean
    connect?: QRCodeWhereUniqueInput
    update?: XOR<XOR<QRCodeUpdateToOneWithWhereWithoutCertificateInput, QRCodeUpdateWithoutCertificateInput>, QRCodeUncheckedUpdateWithoutCertificateInput>
  }

  export type UserCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type CertificateCreateNestedManyWithoutTemplateInput = {
    create?: XOR<CertificateCreateWithoutTemplateInput, CertificateUncheckedCreateWithoutTemplateInput> | CertificateCreateWithoutTemplateInput[] | CertificateUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutTemplateInput | CertificateCreateOrConnectWithoutTemplateInput[]
    createMany?: CertificateCreateManyTemplateInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<CertificateCreateWithoutTemplateInput, CertificateUncheckedCreateWithoutTemplateInput> | CertificateCreateWithoutTemplateInput[] | CertificateUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutTemplateInput | CertificateCreateOrConnectWithoutTemplateInput[]
    createMany?: CertificateCreateManyTemplateInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    upsert?: UserUpsertWithoutTemplatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTemplatesInput, UserUpdateWithoutTemplatesInput>, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type CertificateUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<CertificateCreateWithoutTemplateInput, CertificateUncheckedCreateWithoutTemplateInput> | CertificateCreateWithoutTemplateInput[] | CertificateUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutTemplateInput | CertificateCreateOrConnectWithoutTemplateInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutTemplateInput | CertificateUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: CertificateCreateManyTemplateInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutTemplateInput | CertificateUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutTemplateInput | CertificateUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<CertificateCreateWithoutTemplateInput, CertificateUncheckedCreateWithoutTemplateInput> | CertificateCreateWithoutTemplateInput[] | CertificateUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutTemplateInput | CertificateCreateOrConnectWithoutTemplateInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutTemplateInput | CertificateUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: CertificateCreateManyTemplateInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutTemplateInput | CertificateUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutTemplateInput | CertificateUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type CertificateCreateNestedOneWithoutQrCodeInput = {
    create?: XOR<CertificateCreateWithoutQrCodeInput, CertificateUncheckedCreateWithoutQrCodeInput>
    connectOrCreate?: CertificateCreateOrConnectWithoutQrCodeInput
    connect?: CertificateWhereUniqueInput
  }

  export type CertificateUpdateOneRequiredWithoutQrCodeNestedInput = {
    create?: XOR<CertificateCreateWithoutQrCodeInput, CertificateUncheckedCreateWithoutQrCodeInput>
    connectOrCreate?: CertificateCreateOrConnectWithoutQrCodeInput
    upsert?: CertificateUpsertWithoutQrCodeInput
    connect?: CertificateWhereUniqueInput
    update?: XOR<XOR<CertificateUpdateToOneWithWhereWithoutQrCodeInput, CertificateUpdateWithoutQrCodeInput>, CertificateUncheckedUpdateWithoutQrCodeInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CertificateCreateWithoutIssuerInput = {
    title: string
    description?: string | null
    issuedAt?: Date | string
    validUntil?: Date | string | null
    certUrl?: string | null
    recipient: UserCreateNestedOneWithoutReceivedCertificatesInput
    template: CertificationTemplateCreateNestedOneWithoutCertificatesInput
    qrCode?: QRCodeCreateNestedOneWithoutCertificateInput
  }

  export type CertificateUncheckedCreateWithoutIssuerInput = {
    id?: number
    title: string
    description?: string | null
    recipientId: number
    templateId: number
    issuedAt?: Date | string
    validUntil?: Date | string | null
    certUrl?: string | null
    qrCode?: QRCodeUncheckedCreateNestedOneWithoutCertificateInput
  }

  export type CertificateCreateOrConnectWithoutIssuerInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutIssuerInput, CertificateUncheckedCreateWithoutIssuerInput>
  }

  export type CertificateCreateManyIssuerInputEnvelope = {
    data: CertificateCreateManyIssuerInput | CertificateCreateManyIssuerInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutRecipientInput = {
    title: string
    description?: string | null
    issuedAt?: Date | string
    validUntil?: Date | string | null
    certUrl?: string | null
    issuer: UserCreateNestedOneWithoutIssuedCertificatesInput
    template: CertificationTemplateCreateNestedOneWithoutCertificatesInput
    qrCode?: QRCodeCreateNestedOneWithoutCertificateInput
  }

  export type CertificateUncheckedCreateWithoutRecipientInput = {
    id?: number
    title: string
    description?: string | null
    issuerId: number
    templateId: number
    issuedAt?: Date | string
    validUntil?: Date | string | null
    certUrl?: string | null
    qrCode?: QRCodeUncheckedCreateNestedOneWithoutCertificateInput
  }

  export type CertificateCreateOrConnectWithoutRecipientInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutRecipientInput, CertificateUncheckedCreateWithoutRecipientInput>
  }

  export type CertificateCreateManyRecipientInputEnvelope = {
    data: CertificateCreateManyRecipientInput | CertificateCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type CertificationTemplateCreateWithoutIssuerInput = {
    title: string
    description?: string | null
    createdAt?: Date | string
    certificates?: CertificateCreateNestedManyWithoutTemplateInput
  }

  export type CertificationTemplateUncheckedCreateWithoutIssuerInput = {
    id?: number
    title: string
    description?: string | null
    createdAt?: Date | string
    certificates?: CertificateUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type CertificationTemplateCreateOrConnectWithoutIssuerInput = {
    where: CertificationTemplateWhereUniqueInput
    create: XOR<CertificationTemplateCreateWithoutIssuerInput, CertificationTemplateUncheckedCreateWithoutIssuerInput>
  }

  export type CertificationTemplateCreateManyIssuerInputEnvelope = {
    data: CertificationTemplateCreateManyIssuerInput | CertificationTemplateCreateManyIssuerInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    action: string
    timestamp?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: number
    action: string
    timestamp?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CertificateUpsertWithWhereUniqueWithoutIssuerInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutIssuerInput, CertificateUncheckedUpdateWithoutIssuerInput>
    create: XOR<CertificateCreateWithoutIssuerInput, CertificateUncheckedCreateWithoutIssuerInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutIssuerInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutIssuerInput, CertificateUncheckedUpdateWithoutIssuerInput>
  }

  export type CertificateUpdateManyWithWhereWithoutIssuerInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutIssuerInput>
  }

  export type CertificateScalarWhereInput = {
    AND?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    OR?: CertificateScalarWhereInput[]
    NOT?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    id?: IntFilter<"Certificate"> | number
    title?: StringFilter<"Certificate"> | string
    description?: StringNullableFilter<"Certificate"> | string | null
    issuerId?: IntFilter<"Certificate"> | number
    recipientId?: IntFilter<"Certificate"> | number
    templateId?: IntFilter<"Certificate"> | number
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
    validUntil?: DateTimeNullableFilter<"Certificate"> | Date | string | null
    certUrl?: StringNullableFilter<"Certificate"> | string | null
  }

  export type CertificateUpsertWithWhereUniqueWithoutRecipientInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutRecipientInput, CertificateUncheckedUpdateWithoutRecipientInput>
    create: XOR<CertificateCreateWithoutRecipientInput, CertificateUncheckedCreateWithoutRecipientInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutRecipientInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutRecipientInput, CertificateUncheckedUpdateWithoutRecipientInput>
  }

  export type CertificateUpdateManyWithWhereWithoutRecipientInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutRecipientInput>
  }

  export type CertificationTemplateUpsertWithWhereUniqueWithoutIssuerInput = {
    where: CertificationTemplateWhereUniqueInput
    update: XOR<CertificationTemplateUpdateWithoutIssuerInput, CertificationTemplateUncheckedUpdateWithoutIssuerInput>
    create: XOR<CertificationTemplateCreateWithoutIssuerInput, CertificationTemplateUncheckedCreateWithoutIssuerInput>
  }

  export type CertificationTemplateUpdateWithWhereUniqueWithoutIssuerInput = {
    where: CertificationTemplateWhereUniqueInput
    data: XOR<CertificationTemplateUpdateWithoutIssuerInput, CertificationTemplateUncheckedUpdateWithoutIssuerInput>
  }

  export type CertificationTemplateUpdateManyWithWhereWithoutIssuerInput = {
    where: CertificationTemplateScalarWhereInput
    data: XOR<CertificationTemplateUpdateManyMutationInput, CertificationTemplateUncheckedUpdateManyWithoutIssuerInput>
  }

  export type CertificationTemplateScalarWhereInput = {
    AND?: CertificationTemplateScalarWhereInput | CertificationTemplateScalarWhereInput[]
    OR?: CertificationTemplateScalarWhereInput[]
    NOT?: CertificationTemplateScalarWhereInput | CertificationTemplateScalarWhereInput[]
    id?: IntFilter<"CertificationTemplate"> | number
    title?: StringFilter<"CertificationTemplate"> | string
    description?: StringNullableFilter<"CertificationTemplate"> | string | null
    issuerId?: IntFilter<"CertificationTemplate"> | number
    createdAt?: DateTimeFilter<"CertificationTemplate"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    action?: StringFilter<"AuditLog"> | string
    userId?: IntFilter<"AuditLog"> | number
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type UserCreateWithoutIssuedCertificatesInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedCertificates?: CertificateCreateNestedManyWithoutRecipientInput
    templates?: CertificationTemplateCreateNestedManyWithoutIssuerInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIssuedCertificatesInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedCertificates?: CertificateUncheckedCreateNestedManyWithoutRecipientInput
    templates?: CertificationTemplateUncheckedCreateNestedManyWithoutIssuerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIssuedCertificatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIssuedCertificatesInput, UserUncheckedCreateWithoutIssuedCertificatesInput>
  }

  export type UserCreateWithoutReceivedCertificatesInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedCertificates?: CertificateCreateNestedManyWithoutIssuerInput
    templates?: CertificationTemplateCreateNestedManyWithoutIssuerInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedCertificatesInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedCertificates?: CertificateUncheckedCreateNestedManyWithoutIssuerInput
    templates?: CertificationTemplateUncheckedCreateNestedManyWithoutIssuerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedCertificatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedCertificatesInput, UserUncheckedCreateWithoutReceivedCertificatesInput>
  }

  export type CertificationTemplateCreateWithoutCertificatesInput = {
    title: string
    description?: string | null
    createdAt?: Date | string
    issuer: UserCreateNestedOneWithoutTemplatesInput
  }

  export type CertificationTemplateUncheckedCreateWithoutCertificatesInput = {
    id?: number
    title: string
    description?: string | null
    issuerId: number
    createdAt?: Date | string
  }

  export type CertificationTemplateCreateOrConnectWithoutCertificatesInput = {
    where: CertificationTemplateWhereUniqueInput
    create: XOR<CertificationTemplateCreateWithoutCertificatesInput, CertificationTemplateUncheckedCreateWithoutCertificatesInput>
  }

  export type QRCodeCreateWithoutCertificateInput = {
    qrData: string
  }

  export type QRCodeUncheckedCreateWithoutCertificateInput = {
    id?: number
    qrData: string
  }

  export type QRCodeCreateOrConnectWithoutCertificateInput = {
    where: QRCodeWhereUniqueInput
    create: XOR<QRCodeCreateWithoutCertificateInput, QRCodeUncheckedCreateWithoutCertificateInput>
  }

  export type UserUpsertWithoutIssuedCertificatesInput = {
    update: XOR<UserUpdateWithoutIssuedCertificatesInput, UserUncheckedUpdateWithoutIssuedCertificatesInput>
    create: XOR<UserCreateWithoutIssuedCertificatesInput, UserUncheckedCreateWithoutIssuedCertificatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIssuedCertificatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIssuedCertificatesInput, UserUncheckedUpdateWithoutIssuedCertificatesInput>
  }

  export type UserUpdateWithoutIssuedCertificatesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedCertificates?: CertificateUpdateManyWithoutRecipientNestedInput
    templates?: CertificationTemplateUpdateManyWithoutIssuerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIssuedCertificatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedCertificates?: CertificateUncheckedUpdateManyWithoutRecipientNestedInput
    templates?: CertificationTemplateUncheckedUpdateManyWithoutIssuerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedCertificatesInput = {
    update: XOR<UserUpdateWithoutReceivedCertificatesInput, UserUncheckedUpdateWithoutReceivedCertificatesInput>
    create: XOR<UserCreateWithoutReceivedCertificatesInput, UserUncheckedCreateWithoutReceivedCertificatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedCertificatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedCertificatesInput, UserUncheckedUpdateWithoutReceivedCertificatesInput>
  }

  export type UserUpdateWithoutReceivedCertificatesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedCertificates?: CertificateUpdateManyWithoutIssuerNestedInput
    templates?: CertificationTemplateUpdateManyWithoutIssuerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedCertificatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedCertificates?: CertificateUncheckedUpdateManyWithoutIssuerNestedInput
    templates?: CertificationTemplateUncheckedUpdateManyWithoutIssuerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CertificationTemplateUpsertWithoutCertificatesInput = {
    update: XOR<CertificationTemplateUpdateWithoutCertificatesInput, CertificationTemplateUncheckedUpdateWithoutCertificatesInput>
    create: XOR<CertificationTemplateCreateWithoutCertificatesInput, CertificationTemplateUncheckedCreateWithoutCertificatesInput>
    where?: CertificationTemplateWhereInput
  }

  export type CertificationTemplateUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: CertificationTemplateWhereInput
    data: XOR<CertificationTemplateUpdateWithoutCertificatesInput, CertificationTemplateUncheckedUpdateWithoutCertificatesInput>
  }

  export type CertificationTemplateUpdateWithoutCertificatesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuer?: UserUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type CertificationTemplateUncheckedUpdateWithoutCertificatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRCodeUpsertWithoutCertificateInput = {
    update: XOR<QRCodeUpdateWithoutCertificateInput, QRCodeUncheckedUpdateWithoutCertificateInput>
    create: XOR<QRCodeCreateWithoutCertificateInput, QRCodeUncheckedCreateWithoutCertificateInput>
    where?: QRCodeWhereInput
  }

  export type QRCodeUpdateToOneWithWhereWithoutCertificateInput = {
    where?: QRCodeWhereInput
    data: XOR<QRCodeUpdateWithoutCertificateInput, QRCodeUncheckedUpdateWithoutCertificateInput>
  }

  export type QRCodeUpdateWithoutCertificateInput = {
    qrData?: StringFieldUpdateOperationsInput | string
  }

  export type QRCodeUncheckedUpdateWithoutCertificateInput = {
    id?: IntFieldUpdateOperationsInput | number
    qrData?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutTemplatesInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedCertificates?: CertificateCreateNestedManyWithoutIssuerInput
    receivedCertificates?: CertificateCreateNestedManyWithoutRecipientInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTemplatesInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedCertificates?: CertificateUncheckedCreateNestedManyWithoutIssuerInput
    receivedCertificates?: CertificateUncheckedCreateNestedManyWithoutRecipientInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
  }

  export type CertificateCreateWithoutTemplateInput = {
    title: string
    description?: string | null
    issuedAt?: Date | string
    validUntil?: Date | string | null
    certUrl?: string | null
    issuer: UserCreateNestedOneWithoutIssuedCertificatesInput
    recipient: UserCreateNestedOneWithoutReceivedCertificatesInput
    qrCode?: QRCodeCreateNestedOneWithoutCertificateInput
  }

  export type CertificateUncheckedCreateWithoutTemplateInput = {
    id?: number
    title: string
    description?: string | null
    issuerId: number
    recipientId: number
    issuedAt?: Date | string
    validUntil?: Date | string | null
    certUrl?: string | null
    qrCode?: QRCodeUncheckedCreateNestedOneWithoutCertificateInput
  }

  export type CertificateCreateOrConnectWithoutTemplateInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutTemplateInput, CertificateUncheckedCreateWithoutTemplateInput>
  }

  export type CertificateCreateManyTemplateInputEnvelope = {
    data: CertificateCreateManyTemplateInput | CertificateCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTemplatesInput = {
    update: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserUpdateWithoutTemplatesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedCertificates?: CertificateUpdateManyWithoutIssuerNestedInput
    receivedCertificates?: CertificateUpdateManyWithoutRecipientNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTemplatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedCertificates?: CertificateUncheckedUpdateManyWithoutIssuerNestedInput
    receivedCertificates?: CertificateUncheckedUpdateManyWithoutRecipientNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CertificateUpsertWithWhereUniqueWithoutTemplateInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutTemplateInput, CertificateUncheckedUpdateWithoutTemplateInput>
    create: XOR<CertificateCreateWithoutTemplateInput, CertificateUncheckedCreateWithoutTemplateInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutTemplateInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutTemplateInput, CertificateUncheckedUpdateWithoutTemplateInput>
  }

  export type CertificateUpdateManyWithWhereWithoutTemplateInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutTemplateInput>
  }

  export type CertificateCreateWithoutQrCodeInput = {
    title: string
    description?: string | null
    issuedAt?: Date | string
    validUntil?: Date | string | null
    certUrl?: string | null
    issuer: UserCreateNestedOneWithoutIssuedCertificatesInput
    recipient: UserCreateNestedOneWithoutReceivedCertificatesInput
    template: CertificationTemplateCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateWithoutQrCodeInput = {
    id?: number
    title: string
    description?: string | null
    issuerId: number
    recipientId: number
    templateId: number
    issuedAt?: Date | string
    validUntil?: Date | string | null
    certUrl?: string | null
  }

  export type CertificateCreateOrConnectWithoutQrCodeInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutQrCodeInput, CertificateUncheckedCreateWithoutQrCodeInput>
  }

  export type CertificateUpsertWithoutQrCodeInput = {
    update: XOR<CertificateUpdateWithoutQrCodeInput, CertificateUncheckedUpdateWithoutQrCodeInput>
    create: XOR<CertificateCreateWithoutQrCodeInput, CertificateUncheckedCreateWithoutQrCodeInput>
    where?: CertificateWhereInput
  }

  export type CertificateUpdateToOneWithWhereWithoutQrCodeInput = {
    where?: CertificateWhereInput
    data: XOR<CertificateUpdateWithoutQrCodeInput, CertificateUncheckedUpdateWithoutQrCodeInput>
  }

  export type CertificateUpdateWithoutQrCodeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: UserUpdateOneRequiredWithoutIssuedCertificatesNestedInput
    recipient?: UserUpdateOneRequiredWithoutReceivedCertificatesNestedInput
    template?: CertificationTemplateUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateWithoutQrCodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuerId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutAuditLogsInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedCertificates?: CertificateCreateNestedManyWithoutIssuerInput
    receivedCertificates?: CertificateCreateNestedManyWithoutRecipientInput
    templates?: CertificationTemplateCreateNestedManyWithoutIssuerInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedCertificates?: CertificateUncheckedCreateNestedManyWithoutIssuerInput
    receivedCertificates?: CertificateUncheckedCreateNestedManyWithoutRecipientInput
    templates?: CertificationTemplateUncheckedCreateNestedManyWithoutIssuerInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedCertificates?: CertificateUpdateManyWithoutIssuerNestedInput
    receivedCertificates?: CertificateUpdateManyWithoutRecipientNestedInput
    templates?: CertificationTemplateUpdateManyWithoutIssuerNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedCertificates?: CertificateUncheckedUpdateManyWithoutIssuerNestedInput
    receivedCertificates?: CertificateUncheckedUpdateManyWithoutRecipientNestedInput
    templates?: CertificationTemplateUncheckedUpdateManyWithoutIssuerNestedInput
  }

  export type CertificateCreateManyIssuerInput = {
    id?: number
    title: string
    description?: string | null
    recipientId: number
    templateId: number
    issuedAt?: Date | string
    validUntil?: Date | string | null
    certUrl?: string | null
  }

  export type CertificateCreateManyRecipientInput = {
    id?: number
    title: string
    description?: string | null
    issuerId: number
    templateId: number
    issuedAt?: Date | string
    validUntil?: Date | string | null
    certUrl?: string | null
  }

  export type CertificationTemplateCreateManyIssuerInput = {
    id?: number
    title: string
    description?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: number
    action: string
    timestamp?: Date | string
  }

  export type CertificateUpdateWithoutIssuerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: UserUpdateOneRequiredWithoutReceivedCertificatesNestedInput
    template?: CertificationTemplateUpdateOneRequiredWithoutCertificatesNestedInput
    qrCode?: QRCodeUpdateOneWithoutCertificateNestedInput
  }

  export type CertificateUncheckedUpdateWithoutIssuerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: QRCodeUncheckedUpdateOneWithoutCertificateNestedInput
  }

  export type CertificateUncheckedUpdateManyWithoutIssuerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CertificateUpdateWithoutRecipientInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: UserUpdateOneRequiredWithoutIssuedCertificatesNestedInput
    template?: CertificationTemplateUpdateOneRequiredWithoutCertificatesNestedInput
    qrCode?: QRCodeUpdateOneWithoutCertificateNestedInput
  }

  export type CertificateUncheckedUpdateWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuerId?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: QRCodeUncheckedUpdateOneWithoutCertificateNestedInput
  }

  export type CertificateUncheckedUpdateManyWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuerId?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CertificationTemplateUpdateWithoutIssuerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUpdateManyWithoutTemplateNestedInput
  }

  export type CertificationTemplateUncheckedUpdateWithoutIssuerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type CertificationTemplateUncheckedUpdateManyWithoutIssuerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateManyTemplateInput = {
    id?: number
    title: string
    description?: string | null
    issuerId: number
    recipientId: number
    issuedAt?: Date | string
    validUntil?: Date | string | null
    certUrl?: string | null
  }

  export type CertificateUpdateWithoutTemplateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: UserUpdateOneRequiredWithoutIssuedCertificatesNestedInput
    recipient?: UserUpdateOneRequiredWithoutReceivedCertificatesNestedInput
    qrCode?: QRCodeUpdateOneWithoutCertificateNestedInput
  }

  export type CertificateUncheckedUpdateWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuerId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: QRCodeUncheckedUpdateOneWithoutCertificateNestedInput
  }

  export type CertificateUncheckedUpdateManyWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    issuerId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}