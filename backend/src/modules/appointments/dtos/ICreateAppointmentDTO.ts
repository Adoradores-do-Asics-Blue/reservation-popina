export default interface ICreateAppointmentDTO {
  provider_id: string;
  user_id: string;
  openingHours?: string;
  finishingHours?: string;
  date: Date;
}
