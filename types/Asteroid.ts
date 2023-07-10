export interface Asteroid {
  links: Links;
  id: string;
  neoReferenceId: string;
  name: string;
  designation: string;
  nasaJplUrl: string;
  absoluteMagnitudeH: number;
  estimatedDiameter: EstimatedDiameter;
  isPotentiallyHazardousAsteroid: boolean;
  closeApproachData: CloseApproachDaum[];
  orbitalData: OrbitalData;
  isSentryObject: boolean;
}

export interface Links {
  self: string;
}

export interface EstimatedDiameter {
  kilometers: Kilometers;
  meters: Meters;
  miles: Miles;
  feet: Feet;
}

export interface Kilometers {
  estimatedDiameterMin: number;
  estimatedDiameterMax: number;
}

export interface Meters {
  estimatedDiameterMin: number;
  estimatedDiameterMax: number;
}

export interface Miles {
  estimatedDiameterMin: number;
  estimatedDiameterMax: number;
}

export interface Feet {
  estimatedDiameterMin: number;
  estimatedDiameterMax: number;
}

export interface CloseApproachDaum {
  closeApproachDate: string;
  closeApproachDateFull: string;
  epochDateCloseApproach: number;
  relativeVelocity: RelativeVelocity;
  missDistance: MissDistance;
  orbitingBody: string;
}

export interface RelativeVelocity {
  kilometersPerSecond: string;
  kilometersPerHour: string;
  milesPerHour: string;
}

export interface MissDistance {
  astronomical: string;
  lunar: string;
  kilometers: string;
  miles: string;
}

export interface OrbitalData {
  orbitId: string;
  orbitDeterminationDate: string;
  firstObservationDate: string;
  lastObservationDate: string;
  dataArcInDays: number;
  observationsUsed: number;
  orbitUncertainty: string;
  minimumOrbitIntersection: string;
  jupiterTisserandInvariant: string;
  epochOsculation: string;
  eccentricity: string;
  semiMajorAxis: string;
  inclination: string;
  ascendingNodeLongitude: string;
  orbitalPeriod: string;
  perihelionDistance: string;
  perihelionArgument: string;
  aphelionDistance: string;
  perihelionTime: string;
  meanAnomaly: string;
  meanMotion: string;
  equinox: string;
  orbitClass: OrbitClass;
}

export interface OrbitClass {
  orbitClassType: string;
  orbitClassDescription: string;
  orbitClassRange: string;
}
