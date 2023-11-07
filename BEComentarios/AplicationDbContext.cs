using BEComentarios.Models;
using Microsoft.EntityFrameworkCore;

namespace BEComentarios
{
    public class AplicationDbContext: DbContext
    {
        public DbSet<Comentario> Comentario { get; set; }

        public DbSet<Reserva> Reserva { get; set; }
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options):base(options) { 
        
        }
        
    }
}
