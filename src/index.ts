import uuid from 'uuid';

const v4brand: unique symbol = Symbol('UUID v4');

const v5brand: unique symbol = Symbol('UUID v5');

export type UUIDv4 = string & {
  [v4brand]: void;
}

export type UUIDv5 = string & {
  [v5brand]: void;
}

export type UUID = UUIDv4 | UUIDv5;

const uuidPatterns: Record<string, RegExp> = {
  v4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  v5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  any: /^[0-9A-F]{8}-[0-9A-F]{4}-(4|5)[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
};

export const isUUIDv4 = (value: unknown): value is UUIDv4 => (
  typeof value === 'string'
    && value.length >= 32
    && value.length <= 36
    && uuidPatterns.v4.test(value)
);

export const isUUIDv5 = (value: unknown): value is UUIDv5 => (
  typeof value === 'string'
    && value.length >= 32
    && value.length <= 36
    && uuidPatterns.v5.test(value)
);

export const isUUID = (value: unknown): value is UUID => (
  isUUIDv4(value) || isUUIDv5(value)
);

/**
 * Try to interpret a value of unknown type as a `UUIDv4` or a string
 * representation of one.
 *
 * @param value
 */
export const asUUIDv4 = (value: unknown): UUIDv4|null => {
  if (isUUIDv4(value)) {
    return value;
  }
  return null;
};

/**
 * Try to interpret a value of unknown type as a `UUIDv5` or a string
 * representation of one.
 *
 * @param value
 */
export const asUUIDv5 = (value: unknown): UUIDv5|null => {
  if (isUUIDv5(value)) {
    return value;
  }
  return null;
};

export const asUUID = (value: unknown): UUID|null => asUUIDv4(value)
  || asUUIDv5(value);

export const expectUUIDv4 = (value: unknown): UUIDv4 => {
  const result = asUUIDv4(value);
  if (!result) {
    throw new Error('Expected a version 4 UUID');
  }
  return result;
};

export const expectUUIDv5 = (value: unknown): UUIDv5 => {
  const result = asUUIDv5(value);
  if (!result) {
    throw new Error('Expected a version 5 UUID');
  }
  return result;
};

/** Return `value` as an UUID if it is one, throw an error if not. */
export const expectUUID = (value: unknown): UUID => {
  const result = asUUID(value);
  if (!result) {
    throw new Error('Expected an UUID');
  }
  return result;
};

export const v4 = (): UUIDv4 => uuid.v4() as UUIDv4;
