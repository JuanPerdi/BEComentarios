using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using BEComentarios;
using BEComentarios.Models;

namespace BEComentarios.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservasController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public ReservasController(AplicationDbContext context)
        {
            _context = context;
        }



        // GET: api/<ComentarioController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listReservas = await _context.Reserva.ToListAsync();
                return Ok(listReservas);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<ComentarioController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var reserva = await _context.Reserva.FindAsync(id);
                if (reserva == null)
                {
                    return NotFound();
                }
                return Ok(reserva);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<ComentarioController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Reserva reserva)
        {
            try
            {
                _context.Add(reserva);
                await _context.SaveChangesAsync();

                return Ok(reserva);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
        }

        // PUT api/<ComentarioController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Reserva reserva)
        {
            try
            {
                if (id != reserva.Id)
                {
                    return BadRequest();
                }
                _context.Update(reserva);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Reserva actualizado con éxito" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<ComentarioController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var reserva = await _context.Reserva.FindAsync(id);
                if (reserva == null)
                {
                    return NotFound();
                }
                _context.Reserva.Remove(reserva);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Reserva eliminado correctamene" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

