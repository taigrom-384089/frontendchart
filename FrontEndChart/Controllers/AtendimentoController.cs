using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace FrontEndChart.Controllers
{
    [Route("api/[controller]")]
    public class AtendimentoController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Atendimento> Dados()
        {
            var rng = new Random();
            return Enumerable.Range(1, 12).Select(index =>
            {
                var atendimento = new Atendimento
                {
                    Data = DateTime.Now.AddMonths(index).ToString("g"),
                    Capacidade = rng.Next(1, 100),
                    Demanda = "Demanda " + index
                };

                atendimento.AtendimentoPlanejado = rng.Next(atendimento.Capacidade);
                atendimento.AtendimentoRealizado = rng.Next(atendimento.AtendimentoPlanejado + 1, atendimento.Capacidade);
                atendimento.Desvio = atendimento.AtendimentoRealizado - atendimento.AtendimentoPlanejado;
                atendimento.CapacidadeAtendimento = atendimento.Capacidade - atendimento.AtendimentoRealizado;

                return atendimento;
            });
        }

        public class Atendimento
        {
            public string Data { get; set; }
            public string Demanda { get; set; }
            public int Capacidade { get; set; }
            public int AtendimentoPlanejado { get; set; }
            public int AtendimentoRealizado { get; set; }
            public int Desvio { get; set; }
            public int CapacidadeAtendimento { get; set; }
        }
    }
}
