using System.ComponentModel.DataAnnotations;

namespace BEComentarios.Models
{
    public class Reserva
    {
        public int Id { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public DateTime Dia { get; set; }
        [Required]
        public string Telefono { get; set; }
        [Required]
        public int NumeroPersonas { get; set; }


    }
}
